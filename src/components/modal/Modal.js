import { Component, createRef } from "react";

import "./Modal.css";

class Modal extends Component {
	state = {
		isClosing: false, // Состояние анимации закрытия
	};

	modalRef = createRef(); // Создаем ref для модального окна

	componentDidMount() {
		document.addEventListener("mousedown", this.handleOutsideClick); // Подписываемся на событие клика
	}

	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleOutsideClick); // Отписываемся при размонтировании
	}

	handleClose = () => {
		this.setState({ isClosing: true }); // Активируем анимацию закрытия
		setTimeout(() => {
			this.props.onClose(); // Закрываем окно после завершения анимации
		}, 300); // Время должно совпадать с продолжительностью анимации в CSS
	};

	handleOutsideClick = (event) => {
		// Если клик произошёл вне модального окна
		if (this.modalRef.current && !this.modalRef.current.contains(event.target)) {
			this.handleClose();
		}
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
		
		return (
			<div className={`modal ${isClosing ? "fade-out" : ""}`} >
				<div className='modal-content' ref={this.modalRef}>
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
