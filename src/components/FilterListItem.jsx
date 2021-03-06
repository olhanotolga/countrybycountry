import React, {useContext} from 'react';
import MyContext from '../context/MyContext';

const FilterListItem = (props) => {
	const {value, id, text, onItemClick} = props;

	const {selected, setSelected, allCountries, setCountriesInfo, setDisplayStart, setDisplayedCountries, theme} = useContext(MyContext);

	const handleSelected = (val) => {
		setSelected(val);
		onItemClick();
	}

	const filterCountries = (val) => {
		setDisplayStart(0);
		
		if (val === '' || val === 'All') {
			setCountriesInfo(allCountries.current);
			setDisplayedCountries(allCountries.current.slice(0, 20));
		} else {
			setCountriesInfo(allCountries.current.filter(country => country.region === val));
			setDisplayedCountries(allCountries.current.filter(country => country.region === val).slice(0, 20));
		}
	}

	const handleCountrySelect = (event) => {
		const selection = event.target.attributes.value.nodeValue;
		filterCountries(selection);
		handleSelected(selection);
	}
	
	const changeBG = (event, type) => {
		event.target.style.backgroundColor = theme[type];
	}

	return (
		<li
			onClick={(e) => handleCountrySelect(e)}
			style={{backgroundColor: theme.elements}}
			onMouseEnter={(e) => changeBG(e, 'background')}
			onMouseLeave={(e) => changeBG(e, 'elements')}
			value={value} 
			role="option"
			id={id}
			className={selected === value ? "filter-li selected" : "filter-li"}
			aria-selected={selected === value ? "true": "false"}>
					{text}
		</li>
	)
}

export default FilterListItem;