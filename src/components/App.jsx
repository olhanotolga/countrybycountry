import React, {useState, useEffect} from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import CountryPage from './CountryPage';
import '../assets/css/App.css';
import {lightThemeColors, darkThemeColors} from '../themes';

const App = () => {
	// current mode/theme
	const [dark, setDark] = useState(false);

	// search box input value
	const [countryName, setCountryName] = useState('');
	
	// light/dark theme toggler
	const handleModeChange = () => setDark(!dark);

	// enables search by pressing Enter key
	const handleCountrySearch = (e, country) => e.code === 'Enter' && setCountryName(country);

	// cleans up the country value when going back to the countries' list
	const handleReset = () => setCountryName('');

	// enables rendering country page component upon clicking on the country card
	const handleCardExpand = (country) => setCountryName(country);

	const setThemeColors = () => {
		const {background, text} = dark ? darkThemeColors : lightThemeColors;
		document.body.style.backgroundColor = background;
		document.getElementById('root').style.color = text;
	}

	useEffect(() => {
		setThemeColors();
	})

	return (
		<>
			<Header handleModeChange={handleModeChange} dark={dark} theme={dark ? darkThemeColors : lightThemeColors}/>
			{
				countryName === '' && <MainContainer handleCountrySearch={handleCountrySearch} handleCardExpand={handleCardExpand} theme={dark ? darkThemeColors : lightThemeColors} dark={dark}/>
			}
			
			{
				countryName !== '' && <CountryPage countryName={countryName} handleReset={handleReset} theme={dark ? darkThemeColors : lightThemeColors}/>
			}
		</>
	);
}

export default App;
