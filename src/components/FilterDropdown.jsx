import React from 'react';

const FilterDropdown = ({onFilter}) => {
	return (
		<div>
			<select onChange={(e) => onFilter(e.target.value)}>
				<option value="">Filter by Region</option>
				<option value="region/africa">Africa</option>
				<option value="region/americas">America</option>
				<option value="region/asia">Asia</option>
				<option value="region/europe">Europe</option>
				<option value="region/oceania">Oceania</option>
				<option value="all">All</option>
			</select>
		</div>
	)
}

export default FilterDropdown;