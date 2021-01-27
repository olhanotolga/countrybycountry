import React, {useContext, useEffect} from 'react';
import Searchbox from './Searchbox';
import FilterDropdown from './FilterDropdown';
import CountryCard from './CountryCard';
import MyContext from '../context/MyContext';

const MainContainer = () => {
	const context = useContext(MyContext);
	const {listURI, loading, setLoading, countriesInfo, setCountriesInfo, displayStart, setDisplayStart, displayedCountries, setDisplayedCountries, pageEnd, options, allCountries} = context;

	// FETCH DATA, STORE it in a ref,
	// DISPLAY DATA
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(listURI);
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
	}, []);

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
				<Searchbox />
				<FilterDropdown />
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
							flag={country.flag}/>
					)
				})}
			</section>

			<div
				className="pageEnd"
				aria-hidden="true"
				ref={pageEnd}>
			</div>
		</main>
	)
}

export default MainContainer;