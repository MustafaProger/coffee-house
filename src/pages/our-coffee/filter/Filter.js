import { Component } from "react";
import SearchPanel from "../../../components/search-panel/SearchPanel";
import SearchFilter from "../../../components/search-filter/SearchFilter";

import './Filter.css'

class Filter extends Component {
	render() {
		return (
			<section
				className='filter'>
				<SearchPanel />
				<SearchFilter
					onButtonClicked={(e) => this.props.onButtonClicked(e)}
					activeButton={this.props.activeButton}
				/>
			</section>
		);
	}
}

export default Filter;