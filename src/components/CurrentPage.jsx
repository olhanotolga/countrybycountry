import React, {useContext} from 'react';
import MainContainer from './MainContainer';
import CountryPage from './CountryPage';
import MyContext from '../context/MyContext';
import FetchCountryData from './FetchCountryData';

const CurrentPage = () => {
	// grabbing variables from the context
	const context = useContext(MyContext);
	const {countryName} = context;

	return (
		<>
			{
				countryName === '' &&
				<MainContainer/>
			}	
			{
				countryName !== '' &&
				<>
					<FetchCountryData />
					<CountryPage />
				</>
			}
		</>
	)
}

export default CurrentPage;