import React, {useState} from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

const Searchbox = ({handleCountrySearch, theme, dark}) => {
	const [countryInput, setCountryInput] = useState('');

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