import React, {useState, useEffect} from 'react';
import Searchbox from './Searchbox';
import FilterDropdown from './FilterDropdown';
import CountryCard from './CountryCard';

const MainContainer = (props) => {
	const URI = 'https://restcountries.eu/rest/v2/';
	
	// create a state for the fetched countries data
	const [countriesInfo, setCountriesInfo] = useState([]);
	
	// a state for the region
	const [region, setRegion] = useState('all');
	// https://restcountries.eu/rest/v2/region/{region}
	// Search by region: Africa, Americas, Asia, Europe, Oceania
	const [searchURI, setSearchURI] = useState(URI + region);
	
	const fetchData = async (searchURI) => {
		try {
			const response = await fetch(searchURI);
			const data = await response.json();
			setCountriesInfo(data);
		} catch (error) {
			console.error(error.message);
		}
	};
	
	const filterCountries = (val) => {
		// console.log(val);
		const endpoint = val === '' ? 'all' : URI + val;
		setRegion(endpoint);
		setSearchURI(endpoint);
		
	}
	
	useEffect(() => {
		fetchData(searchURI);
		return () => {
			setCountriesInfo([]);
		}
	}, [searchURI]);


	// console.log(countriesInfo);

	return (
		<main>
			<section className="search-bar">
				<Searchbox handleCountrySearch={props.handleCountrySearch} />
				<FilterDropdown onFilter={filterCountries} />
			</section>

			<section className="cards-container">
				{countriesInfo.map(country => {
					return (
						<CountryCard
							key={country.numericCode}
							name={country.name}
							population={country.population}
							region={country.region}
							capital={country.capital}
							flag={country.flag}
							handleCardExpand={props.handleCardExpand}/>
					)
				})}
				
			</section>
		</main>
	)
}

export default MainContainer;