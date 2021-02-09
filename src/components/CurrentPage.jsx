import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainContainer from './MainContainer';
import CountryPage from './CountryPage';
import NotFound404 from './NotFound404';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const CurrentPage = () => {
	
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={MainContainer} />
				<Route path='/:country' component={CountryPage} />
				<Route component={NotFound404} />
			</Switch>
		</BrowserRouter>
	)
}

export default CurrentPage;