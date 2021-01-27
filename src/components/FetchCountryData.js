import {useContext, useEffect} from 'react';
import MyContext from '../context/MyContext';

const FetchCountryData = () => {
	const context = useContext(MyContext);
	const {handleReset, setCountryData, baseCountryURI, countryName} = context;

	
	useEffect(() => {
		const searchURI = baseCountryURI + countryName;
		const fetchData = async (searchURI) => {
			try {
				const response = await fetch(searchURI);
				if (response.status === 404) {
					console.log(searchURI, countryName);
					// currently it goes back to the homepage
					handleReset();
					return;
				}
				const data = await response.json();
				setCountryData(data[0]);
			} catch (error) {
				console.error(error.message);
			}
		}
		fetchData(searchURI);
		return () => {
			setCountryData([]);
		}
	}, [countryName]);

	return null;
}

export default FetchCountryData;
