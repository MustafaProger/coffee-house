import { Component } from "react";

class DynamicCards extends Component {
	render() {
		const { img, title, region, price } = this.props;

		return (
			<div className="cards__item cards__item-dynamic">
				<div className="cards__item-img">
					<img
						src={img}
						alt={`Изображение кофе: ${title}`}
						style={{ width: 300, height: 200 }}
					/>
				</div>
				<p className="cards__item-title">{title}</p>
				<p className="cards__item-region">{region}</p>
				<p className="cards__item-price">{price + " $"}</p>

				<style>{`
					.cards__item-dynamic::before {
						height: 240px;
					}

					.cards__item-region {
						text-align: left;
					}
				`}</style>
			</div>
		);
	}
}

export default DynamicCards;