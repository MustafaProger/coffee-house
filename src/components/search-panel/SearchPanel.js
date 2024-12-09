import { Component } from "react";
import "./SearchPanel.css";

class SearchPanel extends Component {

	state = {
		term: ''
	}

	updateTerm = (e) => {
		this.setState({term: e.target.value})
		this.props.onSearching(e.target.value);
	}

	render() {
		return (
			<div className='search-panel'>
				<div className='container'>
					<p className='search-panel__text subtitle'>Поиск</p>
					<input
                        className="search-panel__input"
						type='search'
						placeholder='Название кофе'
						onChange={(e) => this.updateTerm(e)}
					/>
				</div>
			</div>
		);
	}
}

export default SearchPanel;
