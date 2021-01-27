import React from 'react';
import Header from './Header';
import CurrentPage from './CurrentPage';
import MyProvider from '../context/MyProvider';
import '../assets/css/App.css';

const App = () => {

	return (
		<MyProvider>
			<Header />
			<CurrentPage />
		</MyProvider>
	);
}

export default App;
