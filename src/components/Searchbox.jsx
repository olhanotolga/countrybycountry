import React from 'react';

const Searchbox = () => {
	return (
		<div>
			<label htmlFor="searchBox">🔍</label>
			<input type="text" id="searchBox" placeholder="Search for a country..."/>
		</div>
	)
}

export default Searchbox;