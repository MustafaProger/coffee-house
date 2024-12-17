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
				<Hero clazz={"our-coffee"} title={"О нашем кофе"} />
				<About
					clazz={"about-beans"}
					title={"О наших зернах"}
					img={img}
					alt={"girl's drinking coffee"}
					descr={
						"От первого аромата до последнего глотка — наш кофе этопутешествие вкуса и мастерства. Каждое зерно тщательноотбирается с лучших плантаций, чтобы гарантировать качество,которое говорит само за себя. Благодаря тонкому искусствуобжарки, мы раскрываем весь потенциал каждого сорта, создаваянапиток, который поражает своей мягкостью, насыщенным ароматом ихарактером."
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