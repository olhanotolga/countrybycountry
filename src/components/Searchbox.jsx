import React, {useContext} from 'react';
import MyContext from '../context/MyContext';
import {useHistory} from 'react-router-dom';
import { HiOutlineSearch } from 'react-icons/hi';

const Searchbox = () => {
	const context = useContext(MyContext);
	const {dark, countryInput, setCountryInput, setCountryName, theme} = context;

	const history = useHistory();

	const handleCountrySearch = (e, country) => {
		e.preventDefault();
		setCountryName(country);
		setCountryInput('');
		history.push({
			pathname: `/${country}`,
			state: {
				country: country
			}
		})
	};

	return (
		<form
			className="search-field"
			style={{backgroundColor: theme.elements}}
			onSubmit={(e) => handleCountrySearch(e, countryInput)}>
			<label htmlFor="searchBox">
				<HiOutlineSearch style={{stroke: theme.text}} />
			</label>
			<input
				className={dark ? "placeholder-dark search-input" : "search-input"}
				type="text"
				id="searchBox"
				value={countryInput}
				name='search'
				onChange={(e) => setCountryInput(e.target.value)}
				placeholder="Search for a country..."
				style={{backgroundColor: theme.elements, color: theme.text}}
				autoComplete="off"
				/>
		</form>
	)
}

export default Searchbox;