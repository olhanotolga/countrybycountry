import React, {useContext, useEffect} from 'react';
import {countryCodes} from '../assets/countryCodes';
import MyContext from '../context/MyContext';
import Loader from './Loader';
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi';
import { Link, useParams, useHistory } from 'react-router-dom';
import FetchCountryData from './FetchCountryData';
import NotFound404 from './NotFound404';

const CountryPage = (props) => {
	const context = useContext(MyContext);
	const {countryData, theme, formatPopulation, handleReset, setCountryName, loading, countryName} = context;

	let {country} = useParams();
	const history = useHistory();
	
	useEffect(() => {
		setCountryName(country)
	}, [country, setCountryName])

	const {flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders} = countryData;

	const displayArrayItems = (array) => array && array.length > 0 ? array.map((item, idx, arr) => {
				return idx !== arr.length - 1 ?
				<span key={idx}>{item.name},&nbsp;</span> :
				<span key={idx}>{item.name}</span>
			}) : 'N/A';

	return (
		<>
			{countryName && <FetchCountryData />}

			{loading ? <Loader/> : 

			countryData.length < 1 ? <NotFound404/> :
			
			<article className="country-page">
				<header className="country-header">
					<button className="back-btn"
						onClick={() => {
							handleReset();
							history.push('/');
						}}
						style={{backgroundColor: theme.elements, color: theme.text}}>
						<HiOutlineArrowNarrowLeft/> Back
					</button>
				</header>
				<section className="country-image">
					<img src={flag} alt={`${name} flag`}loading="lazy"/>
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
								const neighbor = countryCodes[border];
								return (
									<Link
										to={{
											pathname: `/${neighbor}`,
											state: {
												fromDashboard: true,
												country: neighbor
											}
										}}
										onClick={() => setCountryName(neighbor)}
										className="border-country"
										key={idx}
										style={{backgroundColor: theme.elements, color: theme.text}}>
											{neighbor}
									</Link>
								)
							}) :
							'N/A'}
						</div>
					
				</section>
			</article>}
		</>
	) 
}

export default CountryPage;