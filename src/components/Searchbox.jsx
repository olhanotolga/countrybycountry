import React, {useContext} from 'react';
import MyContext from '../context/MyContext';
import { HiOutlineSearch } from 'react-icons/hi';

const Searchbox = () => {
	const context = useContext(MyContext);
	const {dark, countryInput, setCountryInput, setCountryName, theme} = context;

	const handleCountrySearch = (e, country) => {
		if (e.code === 'Enter') {
			setCountryName(country);
			setCountryInput('');
		}
	};

	return (
		<div className="search-field" style={{backgroundColor: theme.elements}}>
			<label htmlFor="searchBox">
				<HiOutlineSearch style={{stroke: theme.text}} />
			</label>
			<input
				className={dark ? "placeholder-dark search-input" : "search-input"}
				type="text"
				id="searchBox"
				value={countryInput}
				onChange={(e) => setCountryInput(e.target.value)}
				onKeyUp={(e) => handleCountrySearch(e, countryInput)}
				placeholder="Search for a country..."
				style={{backgroundColor: theme.elements, color: theme.text}}
				autoComplete="off"
				/>
		</div>
	)
}

export default Searchbox;