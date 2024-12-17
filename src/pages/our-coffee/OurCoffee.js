import { Component } from "react";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import Cards from "./cards/Cards";
import img from "./about-beans/about-beans.png";
import "./hero/Hero.css";
import SearchFilter from "./search-filter/SearchFilter";

class OurCoffee extends Component {
	state = {
		activeButton: "All", // текущая выбранная кнопка фильтра
		term: "", // поисковый запрос
	};

	componentDidMount() {
		this.loadActiveButtonFromLocalStorage();
	}

	// Загрузка состояния активной кнопки из localStorage
	loadActiveButtonFromLocalStorage = () => {
		const savedActiveButton = localStorage.getItem("activeButton");
		if (savedActiveButton) {
			this.setState({ activeButton: savedActiveButton });
		}
	};

	// Сохранение состояния активной кнопки в localStorage
	saveActiveButtonToLocalStorage = (buttonText) => {
		localStorage.setItem("activeButton", buttonText);
	};

	// Обработчик клика по кнопке
	handleButtonClicked = (buttonText) => {
		this.setState({ activeButton: buttonText }, () => {
			this.saveActiveButtonToLocalStorage(buttonText); // Сохраняем выбранную кнопку
		});
	};

	// Обработчик ввода текста для поиска
	onSearching = (searching) => {
		this.setState({ term: searching });
	};

	render() {
		return (
			<>
				<Hero clazz={"our-coffee"} title={"About Our Coffee"} />
				<About
					clazz={"about-beans"}
					title={"About Our Beans"}
					img={img}
					alt={"girl's drinking coffee"}
					descr={
						"From the first aroma to the last sip, our coffee is a journey of flavor and craftsmanship. Each bean is meticulously selected from the finest plantations to ensure quality that speaks for itself. Through the refined art of roasting, we unlock the full potential of every variety, crafting a drink that delights with its smoothness, rich aroma, and distinctive character."
					}
				/>
				<SearchFilter
					onButtonClicked={this.handleButtonClicked}
					activeButton={this.state.activeButton} // Передаем строку, а не функцию
					onSearching={this.onSearching}
				/>
				<Cards
					activeButton={this.state.activeButton} // Передаем строку, а не функцию
					term={this.state.term} // Передаем строку
				/>
				<Footer />
			</>
		);
	}
}

export default OurCoffee;