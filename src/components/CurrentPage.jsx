import React, {useContext} from 'react';
import MainContainer from './MainContainer';
import CountryPage from './CountryPage';
import MyContext from '../context/MyContext';
import FetchCountryData from './FetchCountryData';
import Loader from './Loader';

const CurrentPage = () => {
	// grabbing variables from the context
	const context = useContext(MyContext);
	const {countryName, loading} = context;

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
					{loading ? <Loader/> : <CountryPage />}
				</>
			}
		</>
	)
}

export default CurrentPage;