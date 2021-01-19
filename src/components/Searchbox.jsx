import React, {useState} from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

const Searchbox = ({handleCountrySearch}) => {
	const [countryInput, setCountryInput] = useState('');

	return (
		<div className="search-field">
			<label htmlFor="searchBox">
				<HiOutlineSearch />
			</label>
			<input
				type="text"
				id="searchBox"
				value={countryInput}
				onChange={(e) => setCountryInput(e.target.value)}
				onKeyUp={(e) => handleCountrySearch(e, countryInput)}
				placeholder="Search for a country..."/>
		</div>
	)
}

export default Searchbox;