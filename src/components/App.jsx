import React, {useState} from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import CountryPage from './CountryPage';
import '../assets/css/App.css';

const App = () => {
	// a state for the mode
	const [dark, setDark] = useState(false);

	// country name searched from the page with all countries
	const [countryName, setCountryName] = useState('');
	
	const handleModeChange = (e) => {
		// console.log(e.target.checked);
		// console.log(dark);
		setDark(!dark);
	}

	const handleCountrySearch = (e, country) => {
		// console.log(e.code);
		// console.log(country);
		if (e.code === 'Enter') {
			setCountryName(country);
		}
	}

	const handleReset = () => {
		setCountryName('');
	}

	const handleCardExpand = (country) => {
		console.log(country);
		setCountryName(country);
	}

	return (
		<>
			<Header handleModeChange={handleModeChange} dark={dark}/>
			{
				countryName === '' && <MainContainer handleCountrySearch={handleCountrySearch} handleCardExpand={handleCardExpand}/>
			}
			
			{
				countryName !== '' && <CountryPage countryName={countryName} handleReset={handleReset}/>
			}
		</>
	);
}

export default App;
