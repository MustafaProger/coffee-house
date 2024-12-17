import { Component } from "react";
import "./Search.css";

class Search extends Component {

	state = {
		term: ''
	}

	updateTerm = (e) => {
		this.setState({term: e.target.value})
		this.props.onSearching(e.target.value);
	}

	render() {
		return (
			<div className='search'>
				<div className='container'>
					<p className='search__text'>Search</p>
					<input
                        className="search__input"
						type='search'
						placeholder='Coffee Name'
						onChange={(e) => this.updateTerm(e)}
					/>
				</div>
			</div>
		);
	}
}

export default Search;
