import React, { Component, createRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Card from "../../../components/card/Card";
import "./Randomizer.css";

class Randomizer extends Component {
	state = {
		allCoffee: [],
		shownCoffee: [],
		isLoading: false,
	};

	cardRefs = []; // Храним ссылки на карточки

	componentDidMount() {
		// Загружаем все кофе из API
		this.props.coffeeApi.getAllCoffee().then((allCoffee) => {
			this.setState({ allCoffee });
		});

		// Загружаем сохраненные данные из localStorage
		const storedCoffee = JSON.parse(localStorage.getItem("randomCoffee"));
		const isLoading = JSON.parse(localStorage.getItem("isLoading"));

		if (storedCoffee) {
			this.cardRefs = storedCoffee.map(() => createRef());
			this.setState({
				shownCoffee: storedCoffee,
				isLoading: isLoading || false,
			});
		}
	}

	handleRandomCoffee = () => {
		const { allCoffee } = this.state;

		this.setState({ isLoading: true, shownCoffee: [] }, () => {
			// Сохраняем состояние загрузки в localStorage
			localStorage.setItem("isLoading", JSON.stringify(true));
		});

		this.props.coffeeApi.getAllCoffee().then((updatedCoffee) => {
			const newShownCoffee = [];

			// Выбираем 3 уникальных кофе
			while (newShownCoffee.length < 3) {
				const randomIndex = Math.floor(Math.random() * updatedCoffee.length);
				const coffee = updatedCoffee[randomIndex];

				if (!newShownCoffee.includes(coffee)) {
					newShownCoffee.push(coffee);
				}
			}

			// Создаем refs для новых карточек
			this.cardRefs = newShownCoffee.map(() => createRef());

			// Сохраняем выбранные карты и состояние загрузки
			this.setState({ shownCoffee: newShownCoffee, isLoading: false }, () => {
				localStorage.setItem("randomCoffee", JSON.stringify(newShownCoffee));
				localStorage.setItem("isLoading", JSON.stringify(false));
			});
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

					{/* Показ текста загрузки */}
					{isLoading && <h1 className='loading'>Loading...</h1>}

					{/* TransitionGroup с nodeRef */}
					<TransitionGroup className='randomizer-cards-container'>
						{shownCoffee.map((coffee, index) => (
							<CSSTransition
								key={index}
								nodeRef={this.cardRefs[index]} // Передаем ссылку для каждого элемента
								timeout={500}
								classNames='coffee-card'>
								<div
									ref={this.cardRefs[index]} // Привязываем ссылку
									className='randomizer-card'>
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