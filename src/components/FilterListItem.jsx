import React from 'react';

const FilterListItem = (props) => {
	const {onFilter, handleSelected, value, role, id, selected, text, theme} = props;

	return (
		<li
			onClick={(e) => {
				onFilter(e.target.attributes.value.nodeValue);
				handleSelected(e.target.attributes.value.nodeValue)
			}}
			style={{backgroundColor: theme.elements}}
			onMouseEnter={(e) => e.target.style.backgroundColor = theme.background}
			onMouseLeave={(e) => e.target.style.backgroundColor = theme.elements}
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