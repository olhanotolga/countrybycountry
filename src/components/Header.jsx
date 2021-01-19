import React from 'react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

const Header = ({dark, handleModeChange, theme}) => {
	console.log(dark);
	return (
		<header className="top-header" style={{backgroundColor: theme.elements}}>
			<h1>CountryByCountry</h1>
			<div className="mode-switch">

				<input onChange={(e) => handleModeChange(e)} checked={dark} type="checkbox" id="themeSwitch" className="visually-hidden"/>
				<label htmlFor="themeSwitch">
					{dark ? <HiOutlineSun /> : <HiOutlineMoon />}
					{dark ? '\u00A0\u00A0Light Mode' : '\u00A0\u00A0Dark Mode'}
				</label>
			</div>
		</header>
	)
}

export default Header;