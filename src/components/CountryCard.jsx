import React from 'react';

const CountryCard = (props) => {
	const {name, population, region, capital, flag} = props;
	const populationLength = population.toString(10).length;
	const populationFormatted = population.toString(10).split('').map((el, idx) => (populationLength - idx) % 3 === 0 ? ',' + el : el).join('');

	return (
		<section className="card">
			<img className="country-flag" src={flag} alt={`${name} flag`}/>
			<div className="country-info">
				<h2>{name}</h2>
				<p>
					<strong>Population:</strong>&nbsp;
					{populationFormatted}
				</p>
				<p>
					<strong>Region:</strong>&nbsp;
					{region}
				</p>
				<p>
					<strong>Capital:</strong>&nbsp;
					{capital}
				</p>
			</div>
		</section>
	)
}

export default CountryCard;