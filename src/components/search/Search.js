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
					<p className='search__text'>Поиск</p>
					<input
                        className="search__input"
						type='search'
						placeholder='Название кофе'
						onChange={(e) => this.updateTerm(e)}
					/>
				</div>
			</div>
		);
	}
}

export default Search;
