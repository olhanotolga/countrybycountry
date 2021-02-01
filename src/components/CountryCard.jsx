import React, {useContext} from 'react';
import MyContext from '../context/MyContext';
import {Link} from 'react-router-dom';

const CountryCard = (props) => {
	const {name, population, region, capital, flag} = props;

	const context = useContext(MyContext);
	const {setCountryName, theme, formatPopulation} = context;

	return (
		<Link
			to={{
				pathname: `/${name}`,
				state: {country: name}
			}}
			className="card"
			onClick={() => setCountryName(name)}
			style={{backgroundColor: theme.elements}}>
				<div className="country-flag">
					<img src={flag} alt={`${name} flag`} loading="lazy"/>
				</div>

				<div className="country-info">
					<h2>{name}</h2>
					<p>
						<strong>Population:</strong>&nbsp;
						{formatPopulation(population)}
					</p>
					<p>
						<strong>Region:</strong>&nbsp;
						{region === '' ? 'N/A' : region}
					</p>
					<p>
						<strong>Capital:</strong>&nbsp;
						{capital === '' ? 'N/A' : capital}
					</p>
				</div>
		</Link>
	)
}

export default CountryCard;