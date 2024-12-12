import { Component } from "react";
import "./Card.css";

class Card extends Component {
	render() {
		const { img, title, price, region = null } = this.props;

		return (
			<div className='cards__item'>
				<div className='cards__item-img'>
					<img
						src={img}
						alt={`Изображение кофе: ${title}`}
						style={{ width: 300, height: 200 }}
					/>
				</div>
				<p className='cards__item-title'>{title}</p>
				{region ? (
					<>
						<p className='cards__item-region'>{region}</p>
						<style>{`
							.cards__item::before {
								height: 240px;
							}

							.cards__item-region {
								text-align: left;
							}
						`}</style>
					</>
				) : null}
				<p className='cards__item-price'>{price + " $"}</p>
			</div>
		);
	}
}

export default Card;
