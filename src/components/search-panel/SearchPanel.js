import { Component } from "react";
import "./SearchPanel.css";

class SearchPanel extends Component {
	render() {
		return (
			<div className='search-panel'>
				<div className='container'>
					<p className='search-panel__text subtitle'>Поиск</p>
					<input
                        className="search-panel__input"
						type='search'
						placeholder='Название кофе'
					/>
				</div>
			</div>
		);
	}
}

export default SearchPanel;
