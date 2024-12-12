import { Component } from "react";

import "./Filter.css";

class Filter extends Component {
	activeBtn = (e) => {
		this.props.onButtonClicked(e.target.textContent);
	};

	render() {
		const buttonsData = [
			{ name: "All" },
			{ name: "Central America" },
			{ name: "Africa" },
			{ name: "South America" },
		];

		const buttons = buttonsData.map(({ name, label }) => {
			const active = this.props.activeButton === name;
			const clazz = active ? "active" : "";
			return (
				<button
					type='button'
					className={`filter__btns-item ${clazz} my_style`}
					key={name}
					onClick={(e) => this.activeBtn(e)}>
					{name}
				</button>
			);
		});
		return (
			<div className='filter'>
				<div className='container'>
					<p className='subtitle filter__text'>или фильтрация</p>
					<div className='filter__btns'>
						{buttons}
					</div>
				</div>
			</div>
		);
	}
}

export default Filter;
