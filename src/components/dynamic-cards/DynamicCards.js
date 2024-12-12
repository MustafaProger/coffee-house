import { Component } from "react";
import "./DynamicCards.css";

class DynamicCards extends Component {
	render() {
		const { img, title, region, price } = this.props;
		return (
			<div className='cards__item cards__item-dynamic'>
				<div className='cards__item-img'>
					<img
						src={img}
						alt={`Изображение кофе: ${title}`}
						style={{width: 300, height: 200}}
					/>
				</div>
                <p className="cards__item-title">{title}</p>
                <p className="cards__item-region">{region}</p>
                <p className="cards__item-price">{price + " $"}</p>
			</div>
		);
	}
}

export default DynamicCards;
