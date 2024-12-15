import React, { Component } from "react";
import Search from "../../../components/search/Search";
import Filter from "../../../components/filter/Filter";

import "./SearchFilter.css";

// Используем forwardRef для передачи ref в DOM-элемент
const SearchFilter = React.forwardRef((props, ref) => {
	return (
		<section className='search-filter' ref={ref}>
			<Search onSearching={(e) => props.onSearching(e)} />
			<Filter
				onButtonClicked={(e) => props.onButtonClicked(e)}
				activeButton={props.activeButton}
			/>
		</section>
	);
});

export default SearchFilter;