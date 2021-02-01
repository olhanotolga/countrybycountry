import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainContainer from './MainContainer';
import CountryPage from './CountryPage';
import NotFound404 from './NotFound404';
// import FetchCountryData from './FetchCountryData';

const CurrentPage = () => {
	// grabbing variables from the context
	// const context = useContext(MyContext);
	// const {countryName} = context;
	
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={MainContainer} />
				<Route path='/:country' component={CountryPage} />
				<Route component={NotFound404} />
			</Switch>
			{/* {
				countryName === '' &&
				<MainContainer/>
			}	
			{
				countryName !== '' &&
				<>
					<FetchCountryData />
					{loading ? <Loader/> : <CountryPage />}
				</>
			} */}
		</BrowserRouter>
	)
}

export default CurrentPage;