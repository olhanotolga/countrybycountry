import React, {useContext, useEffect} from 'react';
import MyContext from '../context/MyContext';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

const Header = () => {

	const context = useContext(MyContext);
	const {dark, setDark, theme} = context;

	// light/dark theme toggler
	const handleModeChange = () => setDark(!dark);

	useEffect(() => {
		const setThemeColors = () => {
			const {background, text} = theme;
			document.body.style.backgroundColor = background;
			document.getElementById('root').style.color = text;
		}
		setThemeColors();
	})

	return (
		<header className="top-header" style={{backgroundColor: theme.elements}}>
			<h1>CountryByCountry</h1>
			<div className="mode-switch">

				<input onChange={() => handleModeChange()} checked={dark} type="checkbox" id="themeSwitch" className="visually-hidden"/>
				<label htmlFor="themeSwitch">
					{dark ? <HiOutlineSun /> : <HiOutlineMoon />}
					{dark ? '\u00A0\u00A0Light Mode' : '\u00A0\u00A0Dark Mode'}
				</label>
			</div>
		</header>
	)
}

export default Header;