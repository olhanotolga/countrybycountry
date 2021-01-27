import React, {useContext} from 'react';
import MyContext from '../context/MyContext';

const CountryCard = (props) => {
	const {name, population, region, capital, flag} = props;

	const context = useContext(MyContext);
	const {setCountryName, theme, formatPopulation} = context;

	return (
		<section className="card"
			onClick={() => setCountryName(name)}
			style={{backgroundColor: theme.elements}}>
				<img className="country-flag" src={flag} alt={`${name} flag`}/>
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
		</section>
	)
}

export default CountryCard;