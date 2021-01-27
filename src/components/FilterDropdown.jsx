import React, {useContext} from 'react';
import {HiOutlineChevronDown} from 'react-icons/hi';
import FilterListItem from './FilterListItem';
import MyContext from '../context/MyContext';

const FilterDropdown = () => {
	const context = useContext(MyContext);
	const {theme, hidden, setHidden} = context;

	const toggleDropdown = () => {
		setHidden(!hidden);
	}

	return (
		<div
			className={hidden ? `filter-field` : `filter-field focused`}
			style={{backgroundColor: theme.elements}}>
			<p
				className="filter-heading"
				onClick={toggleDropdown}
				id="listboxlabel">
					Filter by region <HiOutlineChevronDown/>
			</p>
			<ul
				className={hidden ? `visually-hidden filter-dropdown` : `filter-dropdown`}
				role="listbox"
				tabIndex="0"
				id="listbox"
				aria-labelledby="listboxlabel"
				style={{backgroundColor: theme.elements}}>
				
				<FilterListItem
					value="All"
					id="listbox-1"
					text="All" />

				<FilterListItem
					value="Africa"
					id="listbox-2"
					text="Africa" />
				
				<FilterListItem
					value="Americas"
					id="listbox-3"
					text="Americas" />
				
				<FilterListItem
					value="Asia"
					id="listbox-4"
					text="Asia" />
				
				<FilterListItem
					value="Europe"
					id="listbox-5"
					text="Europe" />
				
				<FilterListItem
					value="Oceania"
					id="listbox-6"
					text="Oceania" />

			</ul>
		</div>
	)
}

export default FilterDropdown;