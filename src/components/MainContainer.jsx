import React, {useState, useEffect, useRef} from 'react';
import Searchbox from './Searchbox';
import FilterDropdown from './FilterDropdown';
import CountryCard from './CountryCard';

const MainContainer = (props) => {
	const URI = 'https://restcountries.eu/rest/v2/all';

	const [loading, setLoading] = useState(true);
	// current countries data (either ALL or filtered by regions)
	const [countriesInfo, setCountriesInfo] = useState([]);
	// the starting index of the chunk I'm rendering
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
	// all fetched data on countries is here:
	const allCountries = useRef([]);

	// FETCH DATA, store it in a ref,
	// DISPLAY DATA
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(URI);
				const data = await response.json();
				allCountries.current = data;
				setCountriesInfo(data);

				setLoading(false);
				setDisplayedCountries(data.slice(0, 20));

			} catch (error) {
				console.error(error.message);
			}
		};
		fetchData();
		// return () => {
		// 	setCountriesInfo([]);
		// 	setDisplayedCountries([]);
		// }
	}, []);

	// filter by the region
	// (set the current list of countries to the filtered one)
	const filterCountries = (val) => {
		setDisplayStart(0);
		
		if (val === '' || val === 'All') {
			setCountriesInfo(allCountries.current);
			setDisplayedCountries(allCountries.current.slice(0, 20));
		} else {
			setCountriesInfo(allCountries.current.filter(country => country.region === val));
			setDisplayedCountries(allCountries.current.filter(country => country.region === val).slice(0, 20));
		}
	}

	// load more countries (from the countriesInfo array) upon scroll to the end of page:
	useEffect(() => {
		const handleIntersect = entries => {
			const loadMore = () => {
				// change the start index of the next chunk — IF the new index is smaller than length
				const totalCountries = countriesInfo.length;
				const startIndex = displayStart + 20;
				
				if (startIndex < totalCountries) {
					setDisplayStart(startIndex);
					
					//check whether the next chunk fits within the standart 20-piece chunk. if not, it's the rest of the countries array
					const endIndex = Math.min(startIndex + 20, totalCountries);
					let newChunk = countriesInfo.slice(0, endIndex);

					setDisplayedCountries(newChunk);
				}
			};
	
			if (entries[0].isIntersecting) loadMore();
		};

		if (!loading) {
			const bottom = pageEnd.current;
			const observer = new IntersectionObserver(handleIntersect, options.current);

			observer.observe(bottom);
			
			return () => observer.unobserve(bottom);
		}
	});

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