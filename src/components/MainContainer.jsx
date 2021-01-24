import React, {useState, useEffect, useRef, useCallback} from 'react';
import Searchbox from './Searchbox';
import FilterDropdown from './FilterDropdown';
import CountryCard from './CountryCard';

const MainContainer = (props) => {
	const URI = 'https://restcountries.eu/rest/v2/all';

	const [loading, setLoading] = useState(true);
	// create a state for the fetched countries data
	const [countriesInfo, setCountriesInfo] = useState([]);
	// the starting index of the next chunk I'm about to render
	const [displayStart, setDisplayStart] = useState(0);
	// countries that are currently displayed
	const [displayedCountries, setDisplayedCountries] = useState([]);


	// refs for the loading upon scroll
	const pageEnd = useRef();
	const options = useRef({
		root: null,
		rootMargins: '0px',
		threshold: 1
	});
	const allCountries = useRef([]);
	// const observer = useRef(new IntersectionObserver(handleIntersect, options.current));

	//* 1 — FETCH DATA, store it in a state/variable
	// this way, it can be filtered through and rendered in chunks
	//? set variable to data
	//? set loading to false
	
	//* 2 — DISPLAY DATA
	//? initially: first 20 items of the stored countries
	//? upon filtering: first 20 items of the filtered countries
	//? upon loading more: previously rendered + 20 (or less if there are less remaining)

	//* 3 — FILTER DATA

	//* 4 — LOAD MORE DATA
	//* 4.a — load more filtered data
	//* 4.b — load more unfiltered data


	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(URI);
				const data = await response.json();
				allCountries.current = data;
				setCountriesInfo(data);
				console.log('1 countriesInfo');
				
				setLoading(false);
				setDisplayedCountries(data.slice(0, 20));

			} catch (error) {
				console.error(error.message);
			}
		};
		fetchData();
		// return () => {
		// 	setCountriesInfo([]);
		// }
	}, []);

	// filter by the region
	// (set the current list of countries to the filtered one)
	const filterCountries = (val) => {
		setDisplayStart(0);
		// setDisplayedCountries([]);
		
		if (val === '' || val === 'All') {
			setCountriesInfo(allCountries.current);
			
		} else {
			setCountriesInfo(allCountries.current.filter(country => country.region === val));
			
		}
		console.log('2 countriesInfo');
	}

	// load more countries by:
	// 1 — changing the start index of the next chunk — IF the new index is smaller than length
	// 2 — looking whether the next chunk fits within the standart 20-piece chunk (start index + 20 < countriesInfo.length)
	// 3 — if not, then next chunk

	useEffect(() => {
		const handleIntersect = entries => {
			const loadMore = () => {
				const totalCountries = countriesInfo.length;
				const startIndex = displayStart + 20;
				if (startIndex < totalCountries) {
					setDisplayStart(startIndex);
		
					const endIndex = Math.min(startIndex + 20, totalCountries);
		
					console.log(countriesInfo[0]);
					let newChunk = countriesInfo.slice(0, endIndex);
					
					setDisplayedCountries(newChunk);
				}
			};
	
			if (entries[0].isIntersecting) loadMore();
	
		};

		if (!loading) {
			console.log('loading set');
			const observer = new IntersectionObserver(handleIntersect, options.current);

			// setLoading(true);
			observer.observe(pageEnd.current);
		}
	});


	// display data every time countriesInfo changes
	// (first time / initial render or after every filter):
	useEffect(() => {
		// console.log(countriesInfo);
		setDisplayedCountries(countriesInfo.slice(0, 20));

		// return () => {
		// 	setDisplayedCountries([])
		// }
	}, [countriesInfo]);
	
	console.log('rendered');

	return (
		<main>
			<section className="search-bar">
				<Searchbox handleCountrySearch={props.handleCountrySearch} theme={props.theme} dark={props.dark}/>
				<FilterDropdown onFilter={filterCountries} theme={props.theme}/>
			</section>

			<section className="cards-container">
				{displayedCountries.map(country => {
					return (
						<CountryCard
							key={country.numericCode}
							name={country.name}
							population={country.population}
							region={country.region}
							capital={country.capital}
							flag={country.flag}
							handleCardExpand={props.handleCardExpand}
							theme={props.theme}/>
					)
				})}
				
			</section>
			<div className="pageEnd" ref={pageEnd}></div>
		</main>
	)
}

export default MainContainer;