import { Component } from "react";
import "./static-cards.css";

class StaticCards extends Component {
	render() {
		const { img, title, price } = this.props;
		return (
			<div className='cards__item cards__item-static'>
				<div className='cards__item-img'>
					<img
						src={img}
						alt={`Изображение кофе: ${title}`}
						style={{width: 300, height: 200}}
					/>
				</div>
                <p className="cards__item-title">{title}</p>
                <p className="cards__item-price">{price}</p>
			</div>
		);
	}
}

export default StaticCards;
