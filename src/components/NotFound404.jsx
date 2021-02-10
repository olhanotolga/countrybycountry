import React, { useContext } from 'react';
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi';
import { Link, useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import {lightThemeColors, darkThemeColors} from '../themes';
import FlagIcon from './FlagIcon';

const NotFound404 = () => {
	const {handleReset, theme, dark} = useContext(MyContext);

	const history = useHistory();
	const search = history.location.pathname[1].toUpperCase() + history.location.pathname.slice(2);
	
	return (
		
			<section className="nf-page">
				<header className="nf-header">
					<button className="back-btn"
						onClick={() => {
							handleReset();
							history.goBack();
						}}
						style={{backgroundColor: theme.elements, color: theme.text}}>
						<HiOutlineArrowNarrowLeft/> Back
					</button>
				</header>
				<section className="nf-card">
					<FlagIcon colors={dark ? lightThemeColors : darkThemeColors} theme={theme}/>
					<h2>Page not found...</h2>
				</section>
		
				<section className="nf-details">
					<p>It seems you were looking for <span className="nf-search">{search}</span>.</p>
					<p>Please check if the spelling is correct. Otherwise, it might be not in the list.</p>
					<p>Only countries, territories, or areas of geographical interest that are assigned official codes in ISO 3166-1 are included here.</p>
					<Link
						to='/'
						className="nf-home-btn"
						style={{backgroundColor: theme.elements, color: theme.text}}>
							Go home
					</Link>
					
				</section>
			</section>
	) 
}

export default NotFound404;
