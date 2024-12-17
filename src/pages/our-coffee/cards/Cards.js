import { Component } from "react";
import CoffeApi from "../../../services/CoffeeApi";
import Card from "../../../components/card/Card";
import "./Cards.css";

class Cards extends Component {
	state = {
		allCoffee: [],
		loading: false,
		currentPage: 1,
		itemsPerPage: 6,
		prevActiveButton: "All"
	};

	coffeeApi = new CoffeApi();

	componentDidMount() {
		this.updateState();
		this.loadPageFromLocalStorage();
	}

    static getDerivedStateFromProps(nextProps, nextState) {
     // Если фильтр изменился, сбрасываем страницу на первую
     if (nextProps.activeButton !== nextState.prevActiveButton) {
         return {
             currentPage: 1,
             prevActiveButton: nextProps.activeButton,
         };
     }
     return null;
    }

	componentDidUpdate(prevProps, prevState) {
		if (prevState.currentPage !== this.state.currentPage) {
			this.savePageToLocalStorage();
		}
	}

	onCoffeeLoading = () => {
		this.setState({ loading: true });
	};

	onCoffeeLoaded = (allCoffee) => {
		this.setState({ allCoffee, loading: false });
	};

	updateState = () => {
		this.onCoffeeLoading();
		this.coffeeApi.getAllCoffee().then(this.onCoffeeLoaded);
	};

	loadPageFromLocalStorage = () => {
		const savedPage = localStorage.getItem("currentPage");
		if (savedPage) {
			this.setState({ currentPage: parseInt(savedPage) });
		}
	};

	savePageToLocalStorage = () => {
		localStorage.setItem("currentPage", this.state.currentPage);
	};

	searchEmp = (items) => {
		const { term } = this.props;

		if (term.length === 0) return items;

		return items.filter((item) => {
			return item.name.indexOf(term) > -1;
		});
	};

	onFiltered = (arr) => {
		const { activeButton } = this.props;
		switch (activeButton) {
			case "Central America":
				return arr.filter((item) => item.region === "Central America");
			case "Africa":
				return arr.filter((item) => item.region === "Africa");
			case "South America":
				return arr.filter((item) => item.region === "South America");
			default:
				return arr;
		}
	};

	renderItems(arr) {
		const { currentPage, itemsPerPage } = this.state;

		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;

		const currentItems = arr.slice(startIndex, endIndex);

		const items = currentItems.map((item) => {
			return (
				<Card
					key={item.id}
					aboutCoffee={item}
				/>
			);
		});
		return <div className='cards__items'>{items}</div>;
	}

	onPageChange = (pageNumber) => {
		this.setState({ currentPage: pageNumber }, () => {
			// Прокручиваем к первой карточке при смене страницы
			this.scrollToFirstCard();
		});
	};

	scrollToFirstCard = () => {
		const firstCard = document.querySelector(".cards__item");
		if (firstCard) {
			// Получаем позицию первого элемента
			const targetPosition =
				firstCard.getBoundingClientRect().top + window.pageYOffset;
			const startPosition = window.pageYOffset;
			const distance = targetPosition - startPosition - 100; // Учитываем отступ 100px для navbar
			const duration = 1000;
			let startTime = null;

			const ease = (t, b, c, d) => {
				t /= d / 2;
				if (t < 1) return (c / 2) * t * t + b;
				t--;
				return (-c / 2) * (t * (t - 2) - 1) + b;
			};

			const scrollAnimation = (currentTime) => {
				if (startTime === null) startTime = currentTime;
				const timeElapsed = currentTime - startTime;
				const run = ease(timeElapsed, startPosition, distance, duration);
				window.scrollTo(0, run);
				if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
			};

			requestAnimationFrame(scrollAnimation);
		}
	};

	renderPagination(totalItems) {
		const { itemsPerPage, currentPage } = this.state;

		const totalPages = Math.ceil(totalItems / itemsPerPage);
		const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

		return (
			<div className='pagination'>
				{pageNumbers.map((number) => (
					<button
						key={number}
						className={`pagination__button ${
							currentPage === number ? "active" : ""
						}`}
						onClick={() => this.onPageChange(number)}>
						{number}
					</button>
				))}
			</div>
		);
	}

	render() {
		const { allCoffee, loading } = this.state;

		const filteredItems = this.onFiltered(this.searchEmp(allCoffee));

		if (loading) {
			return (
				<section className='cards'>
					<div className='container'>
						<h1 className='title'>Loading...</h1>
					</div>
				</section>
			);
		}

		return (
			<section className='cards'>
				<div className='container'>
					{this.renderItems(filteredItems)}
					{this.renderPagination(filteredItems.length)}
				</div>
			</section>
		);
	}
}

export default Cards;