import { Component } from "react";
import Search from "../../../components/search/Search";
import Filter from "../../../components/filter/Filter";

import "./SearchFilter.css";

class SearchFilter extends Component {
	render() {
		return (
			<section className='search-filter'>
				<Search onSearching={(e) => this.props.onSearching(e)} />
				<Filter
					onButtonClicked={(e) => this.props.onButtonClicked(e)}
					activeButton={this.props.activeButton}
				/>
			</section>
		);
	}
}

export default SearchFilter;
