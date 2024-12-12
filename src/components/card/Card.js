import { Component } from "react";
import Modal from "../modal/Modal";

import "./Card.css";

class Card extends Component {
	state = {
		isModalOpen: false, // Управление модальным окном
	};

	onOpenModal = () => {
		this.setState({ isModalOpen: true }); // Открыть модальное окно
	};

	onCloseModal = () => {
		this.setState({ isModalOpen: false }); // Закрыть модальное окно
	};

	render() {
		const {
			aboutCoffee: { img, name, price, region = null },
			aboutCoffee,
		} = this.props;

		return (
			<>
				<div className="cards__item" onClick={this.onOpenModal}>
					<div className="cards__item-img">
						<img
							src={img}
							alt={`Изображение кофе: ${name}`}
							style={{ width: 300, height: 200 }}
						/>
					</div>
					<p className="cards__item-title">{name}</p>
					<p className="cards__item-region">{region}</p>
					<p className="cards__item-price">{price + " $"}</p>
				</div>

				{this.state.isModalOpen && (
					<Modal data={aboutCoffee} onClose={this.onCloseModal} />
				)}
			</>
		);
	}
}

export default Card;