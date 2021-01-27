import React, {useContext} from 'react';
import {countryCodes} from '../assets/countryCodes';
import MyContext from '../context/MyContext';
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi';

const CountryPage = () => {
	const context = useContext(MyContext);
	const {countryData, theme, formatPopulation, handleReset} = context;

	const {flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders} = countryData;

	const displayArrayItems = (array) => array && array.length > 0 ? array.map((item, idx, arr) => {
				return idx !== arr.length - 1 ?
				<span key={idx}>{item.name},&nbsp;</span> :
				<span key={idx}>{item.name}</span>
			}) : 'N/A';

	return (
		<article className="country-page">
			<header className="country-header">
				<button className="back-btn"
					onClick={handleReset}
					style={{backgroundColor: theme.elements, color: theme.text}}>
					<HiOutlineArrowNarrowLeft/> Back
				</button>
			</header>

			<section className="country-image">
				<img src={flag} alt={`${name} flag`}/>
			</section>

			<section className="country-details">
				<h2>{name}</h2>
				
				<div className="info-chunk">
					{/* ABSTRACT FURTHER TO INFO-LINES (?) */}
					<p><strong>Native Name:</strong>&nbsp;{nativeName}</p>
					<p><strong>Population:</strong>&nbsp;{population && formatPopulation(population)}</p>
					<p><strong>Region:</strong>&nbsp;{region}</p>
					<p><strong>Sub Region:</strong>&nbsp;{subregion}</p>
					<p><strong>Capital:</strong>&nbsp;{capital}</p>
				</div>
				
				<div className="info-chunk">
					<p><strong>Top Level Domain:</strong>&nbsp;{topLevelDomain}</p>
					<p><strong>Currencies:</strong>&nbsp;
					{displayArrayItems(currencies)}
					</p>
					<p><strong>Languages:</strong>&nbsp;
					{displayArrayItems(languages)}
					</p>
				</div>
				
				
					<div className="info-chunk">
						<h3>Border Countries:</h3>
						{borders && borders.length > 0 ?
						borders.map((border, idx) => {
							return (
								<button className="border-country" key={idx} style={{backgroundColor: theme.elements, color: theme.text}}>
									{countryCodes[border]}
								</button>
							)
						}) :
						'N/A'}
					</div>
				
			</section>
		</article>
	)
}

export default CountryPage;