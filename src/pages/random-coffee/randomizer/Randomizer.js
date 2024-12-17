import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Card from "../../../components/card/Card";
import "./Randomizer.css";

class Randomizer extends Component {
	state = {
		allCoffee: [], // Полный массив кофе
		shownCoffee: [], // Массив выбранных карточек
		isLoading: false, // Состояние загрузки данных
	};

	componentDidMount() {
		// Загружаем все данные кофе
		this.props.coffeeApi.getAllCoffee().then((allCoffee) => {
			this.setState({ allCoffee });
		});

		// Получаем сохраненные данные из localStorage
		const storedCoffee = JSON.parse(localStorage.getItem("randomCoffee"));
		if (storedCoffee) {
			this.setState({ shownCoffee: storedCoffee });
		}
	}

	handleRandomCoffee = () => {
		
		// Отображаем LOADING
		this.setState({ isLoading: true, shownCoffee: [] });

		// Генерация данных
		this.props.coffeeApi.getAllCoffee().then((updatedCoffee) => {
			const newShownCoffee = [];

			while (newShownCoffee.length < 3) {
				const randomIndex = Math.floor(Math.random() * updatedCoffee.length);
				const coffee = updatedCoffee[randomIndex];

				if (!newShownCoffee.includes(coffee)) {
					newShownCoffee.push(coffee);
				}
			}

			// Обновляем состояние с новыми карточками
			this.setState({ shownCoffee: newShownCoffee, isLoading: false });

			// Сохраняем выбранные карточки
			localStorage.setItem("randomCoffee", JSON.stringify(newShownCoffee));
		});
	};

	render() {
		const { shownCoffee, isLoading } = this.state;

		return (
			<section className='randomizer-coffee'>
				<div className='container'>
					<button
						className='randomizer-button'
						onClick={this.handleRandomCoffee}
						disabled={isLoading}>
						Случайный кофе
					</button>

					{/* LOADING заголовок */}
					{isLoading && <h1 className='title'>LOADING...</h1>}

					{/* Анимация карточек */}
					<TransitionGroup className='randomizer-cards-container'>
						{shownCoffee.map((coffee, index) => (
							<CSSTransition
								key={index}
								timeout={500}
								classNames='coffee-card'>
								<div className='randomizer-card'>
									<Card aboutCoffee={coffee} />
								</div>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
			</section>
		);
	}
}

export default Randomizer;
