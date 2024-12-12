import { Component } from "react";
import Card from "../../../components/card/Card";

import "./OurBest.css";

class OurBest extends Component {

	renderItems(arr) {
		const items = arr.map((item, id) => {
			if (id >= 3) {
				return null;
			}

			return (
				<Card
					key={item.id}
					img={item.img}
					title={item.name}
					price={item.price}
				/>
			);
		});

		return <div className='cards cards-static'>{items}</div>;
	}

	render() {
		const items = this.renderItems(this.props.allCoffee);

		return (
			<section
				className='our-best'
				id='our-best'>
				<div className='container'>
					<h1 className='title our-best__title'>Наше лучшее</h1>
					{items}
				</div>
			</section>
		);
	}
}

export default OurBest;
