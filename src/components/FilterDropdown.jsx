import React, {useState} from 'react';
import {HiOutlineChevronDown} from 'react-icons/hi';
import FilterListItem from './FilterListItem';

const FilterDropdown = ({onFilter}) => {
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
		<div className={hidden ? `filter-field` : `filter-field focused`}>
			<p className="filter-heading" onClick={() => toggleDropdown()} id="listboxlabel">
				Filter by region <HiOutlineChevronDown/>
			</p>
			<ul className={hidden ? `visually-hidden filter-dropdown` : `filter-dropdown`} role="listbox" tabIndex="0" id="listbox" aria-labelledby="listboxlabel">
				
				<FilterListItem
					onFilter={onFilter}
					handleSelected={handleSelected}
					value="all"
					role="option"
					id="listbox-1"
					selected={selected}
					text="All" />

				<FilterListItem
					onFilter={onFilter}
					handleSelected={handleSelected}
					value="region/africa"
					role="option"
					id="listbox-2"
					selected={selected}
					text="Africa" />
				
				<FilterListItem
					onFilter={onFilter}
					handleSelected={handleSelected}
					value="region/americas"
					role="option"
					id="listbox-3"
					selected={selected}
					text="America" />
				
				<FilterListItem
					onFilter={onFilter}
					handleSelected={handleSelected}
					value="region/asia"
					role="option"
					id="listbox-4"
					selected={selected}
					text="Asia" />
				
				<FilterListItem
					onFilter={onFilter}
					handleSelected={handleSelected}
					value="region/europe"
					role="option"
					id="listbox-5"
					selected={selected}
					text="Europe" />
				
				<FilterListItem
					onFilter={onFilter}
					handleSelected={handleSelected}
					value="region/oceania"
					role="option"
					id="listbox-6"
					selected={selected}
					text="Oceania" />

			</ul>
		</div>
	)
}

export default FilterDropdown;