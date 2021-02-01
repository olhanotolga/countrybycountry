import {useContext, useEffect} from 'react';
import MyContext from '../context/MyContext';
import NotFound404 from './NotFound404';

const FetchCountryData = () => {
	const context = useContext(MyContext);
	const {handleReset, setCountryData, baseCountryURI, countryName, setLoading} = context;

	useEffect(() => {
		setLoading(true);
		return () => {
			setLoading(false);
		}
	}, [setLoading])
	
	useEffect(() => {
		// setLoading(true);
		const searchURI = baseCountryURI + countryName;
		const fetchData = async (searchURI) => {
			try {
				const response = await fetch(searchURI);
				if (response.status === 404) {
					// currently it goes back to the homepage
					handleReset();
					console.log('404!!! OH NO!!!');
					// setLoading(false);
					
					return;
				}
				const data = await response.json();
				setCountryData(data[0]);
				setLoading(false);
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
