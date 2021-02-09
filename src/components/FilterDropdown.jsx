import React, {useContext} from 'react';
import {HiOutlineChevronDown} from 'react-icons/hi';
import FilterListItem from './FilterListItem';
import MyContext from '../context/MyContext';
import useShown from '../customHooks/useShown';

const FilterDropdown = () => {
	const {theme, hidden, setHidden} = useContext(MyContext);

	const { ref, isShown, setIsShown } = useShown(false);

	const toggleDropdown = () => {
		console.log('dropdown toggled');
		setHidden(isShown);
		setIsShown(!isShown);
	}

	return (
		<div
			className={!isShown ? `filter-field` : `filter-field focused`}
			onClick={toggleDropdown}
			style={{backgroundColor: theme.elements}}>
			<p
				className="filter-heading"
				id="listboxlabel">
					Filter by region <HiOutlineChevronDown/>
			</p>
			<ul
				className={!isShown || hidden ? `visually-hidden filter-dropdown` : `filter-dropdown`}
				role="listbox"
				tabIndex="0"
				id="listbox"
				aria-labelledby="listboxlabel"
				style={{backgroundColor: theme.elements}}
				ref={ref}>
				
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