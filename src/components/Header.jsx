import React from 'react';

const Header = () => {
	return (
		<header>
			<h1>CountryByCountry</h1>
			<div>
				<input type="checkbox" id="themeSwitch"/>
				<label htmlFor="themeSwitch">Dark Mode</label>
			</div>
		</header>
	)
}

export default Header;