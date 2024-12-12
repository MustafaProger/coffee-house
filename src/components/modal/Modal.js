import { Component } from "react";

import "./Modal.css";

class Modal extends Component {
	state = {
		isClosing: false, // Состояние анимации закрытия
	};

	handleClose = () => {
		this.setState({ isClosing: true }); // Активируем анимацию закрытия
		setTimeout(() => {
			this.props.onClose(); // Закрываем окно после завершения анимации
		}, 300); // Время должно совпадать с продолжительностью анимации в CSS
	};

	render() {
		const {
			img,
			name,
			price,
			region,
			descr,
			roast_level,
			flavor_profile,
			grind_option,
		} = this.props.data;
        
		const { isClosing } = this.state;

		const arrGrind = [...grind_option];
		console.log(arrGrind);
		return (
			<div className={`modal ${isClosing ? "fade-out" : ""}`}>
				<div className='modal-content'>
					<button
						className='modal-close'
						onClick={this.handleClose}>
						&times;
					</button>
					<img
						src={img}
						alt={name}
						width={500}
						height={350}
					/>
					<div className='modal__text'>
						<h2>{name}</h2>
						<p>
							<strong>Цена: </strong>
							<em>{price}</em> $
						</p>
						<p>
							<strong>Страна: </strong>
							<em>{region}</em>
						</p>
						<p>
							<strong>Описание: </strong>
							<em>{descr}</em>
						</p>
						<p>
							<strong>Уровень обжаривания: </strong>
							<em>{roast_level}</em>
						</p>
						<p>
							<strong>Вкусовой профиль: </strong>
							<em>{flavor_profile.join(", ")}</em>
						</p>
						<p>
							<strong>Вариант измельчения: </strong>
							<em>{grind_option.join(", ")}</em>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;
