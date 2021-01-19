import React from 'react';

const FilterListItem = (props) => {
	const {onFilter, handleSelected, value, role, id, selected, text} = props;

	return (
		<li
			onClick={(e) => {
				onFilter(e.target.attributes.value.nodeValue);
				handleSelected(e.target.attributes.value.nodeValue)
			}}
			value={value} 
			role={role}
			id={id}
			className={selected === value ? "filter-li selected" : "filter-li"}
			aria-selected={selected === value ? "true": "false"}>
					{text}
		</li>
	)
}

export default FilterListItem;