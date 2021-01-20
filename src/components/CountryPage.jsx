import React, {useState, useEffect} from 'react';
import {countryCodes} from '../assets/countryCodes';
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi';

const CountryPage = ({countryName, handleReset, theme}) => {
	const URI = 'https://restcountries.eu/rest/v2/name/';

	const [searchURI, setSearchURI] = useState(URI + countryName);

	const [countryData, setCountryData] = useState([]);	

	useEffect(() => {
		setSearchURI(URI + countryName);
	}, [countryName])

	useEffect(() => {
		const fetchData = async (searchURI) => {
			try {
				const response = await fetch(searchURI);
				if (response.status === 404) {
					// currently it goes back to the homepage
					handleReset();
					return;
				}
				const data = await response.json();
				setCountryData(data[0]);
			} catch (error) {
				console.error(error.message);
			}
		}
		fetchData(searchURI);
		return () => {
			setCountryData([]);
		}
	}, [searchURI, handleReset])

	const formatPopulation = (data) => {
		const population = data.population;
		const populationLength = population.toString(10).length;
		const populationFormatted = population.toString(10).split('').map((el, idx) => (populationLength - idx) % 3 === 0 && idx !== 0 ? ',' + el : el).join('');
		return populationFormatted;
	}

	return (
		<article className="country-page">
			<header className="country-header">
				<button className="back-btn" onClick={() => handleReset()} style={{backgroundColor: theme.elements, color: theme.text}}>
				<HiOutlineArrowNarrowLeft/> Back
				</button>
			</header>

			<section className="country-image">
				<img src={countryData.flag} alt={`${countryData.name} flag`}/>
			</section>

			<section className="country-details">
				<h2>{countryData.name}</h2>
				
				<div className="info-chunk">
					<p><strong>Native Name:</strong>&nbsp;{countryData.nativeName}</p>
					<p><strong>Population:</strong>&nbsp;{countryData.population && formatPopulation(countryData)}</p>
					<p><strong>Region:</strong>&nbsp;{countryData.region}</p>
					<p><strong>Sub Region:</strong>&nbsp;{countryData.subregion}</p>
					<p><strong>Capital:</strong>&nbsp;{countryData.capital}</p>
				</div>
				
				<div className="info-chunk">
					<p><strong>Top Level Domain:</strong>&nbsp;{countryData.topLevelDomain}</p>
					<p><strong>Currencies:</strong>&nbsp;
					{countryData.currencies && countryData.currencies.map((curr, idx, arr) => {
						return idx !== arr.length - 1 ?
						<span key={idx}>{curr.name},</span> :
						<span key={idx}>{curr.name}</span>
					})}
					{console.log(countryData.currencies)}
					</p>
					<p><strong>Languages:</strong>&nbsp;{countryData.nativeName}</p>
				</div>
				
				<div className="info-chunk">
					<h3>Border Countries:</h3>
					{countryData.borders && countryData.borders.map((border, idx) => <button className="border-country" key={idx} style={{backgroundColor: theme.elements, color: theme.text}}>{countryCodes[border]}</button>)}
				</div>
			</section>
		</article>
	)
}

export default CountryPage;