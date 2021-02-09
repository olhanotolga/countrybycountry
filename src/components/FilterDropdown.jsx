import React, {useContext} from 'react';
import {HiOutlineChevronDown} from 'react-icons/hi';
import FilterListItem from './FilterListItem';
import MyContext from '../context/MyContext';
import useShown from '../customHooks/useShown';

const FilterDropdown = () => {
	const {theme} = useContext(MyContext);

	const { ref, isShown, setIsShown } = useShown(false);

	const toggleDropdown = () => {
		setIsShown(!isShown);
	}

	return (
		<div
			className={!isShown ? `filter-field` : `filter-field focused`}
			style={{backgroundColor: theme.elements}}
			onClick={toggleDropdown}
			ref={ref}>
			<p
				className="filter-heading"
				id="listboxlabel">
					Filter by region <HiOutlineChevronDown/>
			</p>
			<ul
				className={!isShown ? `visually-hidden filter-dropdown` : `filter-dropdown`}
				role="listbox"
				tabIndex="0"
				id="listbox"
				aria-labelledby="listboxlabel"
				style={{backgroundColor: theme.elements}}>
				
				<FilterListItem
					onItemClick={toggleDropdown}
					value="All"
					id="listbox-1"
					text="All" />

				<FilterListItem
					onItemClick={toggleDropdown}
					value="Africa"
					id="listbox-2"
					text="Africa" />
				
				<FilterListItem
					onItemClick={toggleDropdown}
					value="Americas"
					id="listbox-3"
					text="Americas" />
				
				<FilterListItem
					onItemClick={toggleDropdown}
					value="Asia"
					id="listbox-4"
					text="Asia" />
				
				<FilterListItem
					onItemClick={toggleDropdown}
					value="Europe"
					id="listbox-5"
					text="Europe" />
				
				<FilterListItem
					onItemClick={toggleDropdown}
					value="Oceania"
					id="listbox-6"
					text="Oceania" />

			</ul>
		</div>
	)
}

export default FilterDropdown;