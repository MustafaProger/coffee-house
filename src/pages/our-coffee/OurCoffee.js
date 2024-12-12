import { Component } from "react";
import Hero from "./hero/Hero";
import AboutBeans from "./about-beans/AboutBeans";
import Footer from "../../components/footer/Footer";
import Cards from "./cards/Cards";
import Filter from "./filter/Filter";

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
				<Hero />
				<AboutBeans />
				<Filter
					onButtonClicked={(e) => this.handleButtonClicked(e)}
					activeButton={this.state.activeButton}
					onSearching={(e) => this.onSearching(e)}
				/>
				<Cards activeButton={this.postStateActiveButton} term={this.postStateTerm}/>
				<Footer />
			</>
		);
	}
}

export default OurCoffee;