import React, {useContext, useEffect} from 'react';
import Searchbox from './Searchbox';
import FilterDropdown from './FilterDropdown';
import CountryCard from './CountryCard';
import Loader from 'react-loader-spinner';
import MyContext from '../context/MyContext';
import useHandleIntersect from '../customHooks/useHandleIntersect';

const MainContainer = () => {
	const {listURI, loading, setLoading, countriesInfo, setCountriesInfo, displayStart, setDisplayStart, displayedCountries, setDisplayedCountries, pageEnd, options, allCountries, theme} = useContext(MyContext);

	const {handleIntersect, newCountriesBatch, newStartIndex} = useHandleIntersect(countriesInfo, displayedCountries, displayStart);

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
		if (!loading) {
			const bottom = pageEnd.current;
			const observer = new IntersectionObserver(handleIntersect, options.current);

			observer.observe(bottom);
			
			return () => observer.unobserve(bottom);
		}
	});

	// tracks changes after the useHandleIntersect runs and updates the page
	useEffect(() => {
		setDisplayedCountries(newCountriesBatch);
		setDisplayStart(newStartIndex)
	}, [newCountriesBatch, newStartIndex, setDisplayStart, setDisplayedCountries])

	if (loading) {
		return (
			<main>
				<Loader className='loader' type="ThreeDots" color={theme.text} height={400} width={400} timeout={0} />
			</main>
		)
	}

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