import { Component } from "react";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import Cards from "./cards/Cards";
import Filter from "./search-filter/SearchFilter";

import img from "./about-beans/about-beans.png";
import "./hero/Hero.css";


class OurCoffee extends Component {
	state = {
		activeButton: "All",
		term: "",
	};

	handleButtonClicked = (buttonText) => {
		this.setState({ activeButton: buttonText });
	};

	onSearching = (searching) => {
		this.setState({ term: searching });
	};

	postStateActiveButton = () => {
		return this.state.activeButton;
	};

	postStateTerm = () => {
		return this.state.term;
	};

	render() {
		return (
			<>
				<Hero
					clazz={"our-coffee"}
					title={"О нашем кофе"}
				/>
				<About
					clazz={"about-beans"}
					title={"О наших зернах"}
					img={img}
					alt={"girl's drinking coffee"}
					descr={
						"От первого аромата до последнего глотка — наш кофе этопутешествие вкуса и мастерства. Каждое зерно тщательноотбирается с лучших плантаций, чтобы гарантировать качество,которое говорит само за себя. Благодаря тонкому искусствуобжарки, мы раскрываем весь потенциал каждого сорта, создаваянапиток, который поражает своей мягкостью, насыщенным ароматом ихарактером."
					}
				/>
				<Filter
					onButtonClicked={(e) => this.handleButtonClicked(e)}
					activeButton={this.state.activeButton}
					onSearching={(e) => this.onSearching(e)}
				/>
				<Cards
					activeButton={this.postStateActiveButton}
					term={this.postStateTerm}
				/>
				<Footer />
			</>
		);
	}
}

export default OurCoffee;
