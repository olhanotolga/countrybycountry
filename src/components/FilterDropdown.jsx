import React, {useState} from 'react';
import {HiOutlineChevronDown} from 'react-icons/hi';
import FilterListItem from './FilterListItem';

const FilterDropdown = ({onFilter, theme}) => {
	const [hidden, setHidden] = useState(true);

	const [selected, setSelected] = useState('all');

	const toggleDropdown = () => {
		setHidden(!hidden);
	}

	const handleSelected = (val) => {
		setSelected(val);
		setHidden(true);
	}

	return (
		<div className={hidden ? `filter-field` : `filter-field focused`} style={{backgroundColor: theme.elements}}>
			<p className="filter-heading" onClick={() => toggleDropdown()} id="listboxlabel">
				Filter by region <HiOutlineChevronDown/>
			</p>
			<ul className={hidden ? `visually-hidden filter-dropdown` : `filter-dropdown`} role="listbox" tabIndex="0" id="listbox" aria-labelledby="listboxlabel" style={{backgroundColor: theme.elements}}>
				
				<FilterListItem
					onFilter={onFilter}
					handleSelected={handleSelected}
					value="All"
					role="option"
					id="listbox-1"
					selected={selected}
					text="All"
					theme={theme} />

				<FilterListItem
					onFilter={onFilter}
					handleSelected={handleSelected}
					value="Africa"
					role="option"
					id="listbox-2"
					selected={selected}
					text="Africa"
					theme={theme} />
				
				<FilterListItem
					onFilter={onFilter}
					handleSelected={handleSelected}
					value="Americas"
					role="option"
					id="listbox-3"
					selected={selected}
					text="Americas"
					theme={theme} />
				
				<FilterListItem
					onFilter={onFilter}
					handleSelected={handleSelected}
					value="Asia"
					role="option"
					id="listbox-4"
					selected={selected}
					text="Asia"
					theme={theme} />
				
				<FilterListItem
					onFilter={onFilter}
					handleSelected={handleSelected}
					value="Europe"
					role="option"
					id="listbox-5"
					selected={selected}
					text="Europe"
					theme={theme} />
				
				<FilterListItem
					onFilter={onFilter}
					handleSelected={handleSelected}
					value="Oceania"
					role="option"
					id="listbox-6"
					selected={selected}
					text="Oceania"
					theme={theme} />

			</ul>
		</div>
	)
}

export default FilterDropdown;