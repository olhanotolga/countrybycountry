import React, {useState, useRef} from 'react';
import MyContext from './MyContext';
import {lightThemeColors, darkThemeColors} from '../themes';

const MyProvider = (props) => {
	
	//* Themes & general
	const [dark, setDark] = useState(false);
	const theme = dark ? darkThemeColors : lightThemeColors;
	// refs for the loading upon scroll: the element and options for IntersectionObserver
	const pageEnd = useRef();
	const options = useRef({
		root: null,
		rootMargins: '0px',
		threshold: 1
	});
	
	//* Displaying a single country
	const baseCountryURI = 'https://restcountries.eu/rest/v2/name/';
	// value is set when using the search box or clicking on a country card
	const [countryName, setCountryName] = useState('');
	// data retrieved via API call
	const [countryData, setCountryData] = useState([]);
	// cleans up the country value when going back to the countries' list
	const handleReset = () => setCountryName('');
	
	
	//* Displaying multiple countries
	const listURI = 'https://restcountries.eu/rest/v2/all';

	const [loading, setLoading] = useState(true);
	// current countries data (either ALL or filtered by regions)
	const [countriesInfo, setCountriesInfo] = useState([]);
	// the starting index of the chunk I'm rendering
	const [displayStart, setDisplayStart] = useState(0);
	// countries that are currently displayed
	const [displayedCountries, setDisplayedCountries] = useState([]);
	// all fetched data on countries is here:
	const allCountries = useRef([]);

	//* Search & Filtering

	const [selected, setSelected] = useState('all');

	const [countryInput, setCountryInput] = useState('');
	
	//* Helper functions
	const formatPopulation = (populationNum) => {
		const populationLength = populationNum.toString(10).length;
		const populationFormatted = populationNum.toString(10).split('').map((el, idx) => (populationLength - idx) % 3 === 0 && idx !== 0 ? ',' + el : el).join('');
		return populationFormatted;
	}

	return (
		<MyContext.Provider value={{
			dark, setDark,
			countryName, setCountryName,
			theme,
			listURI,
			loading, setLoading,
			countriesInfo, setCountriesInfo,
			displayStart, setDisplayStart,
			displayedCountries, setDisplayedCountries,
			pageEnd,
			options,
			allCountries,
			countryInput, setCountryInput,
			selected, setSelected,
			formatPopulation,
			baseCountryURI,
			countryData, setCountryData,
			handleReset
		}}>
			{props.children}
		</MyContext.Provider>
	)
}

export default MyProvider;