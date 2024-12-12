import { Component } from "react";

import "./SearchFilter.css";

class SearchFilter extends Component {
	activeBtn = (e) => {
		this.props.onButtonClicked(e.target.textContent);
	};

	render() {
		const { activeButton } = this.props;
		return (
			<div className='search-filter'>
				<div className='container'>
					<p className='subtitle search-filter__text'>или фильтрация</p>
					<div className='search-filter__btns'>
						<button
							className={`search-filter__btns-item ${
								activeButton === "Central America" ? "active" : ""
							}`}
							onClick={this.activeBtn}>
							Central America
						</button>
						<button
							className={`search-filter__btns-item ${
								activeButton === "Africa" ? "active" : ""
							}`}
							onClick={this.activeBtn}>
							Africa
						</button>
						<button
							className={`search-filter__btns-item ${
								activeButton === "South America" ? "active" : ""
							}`}
							onClick={this.activeBtn}>
							South America
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchFilter;
