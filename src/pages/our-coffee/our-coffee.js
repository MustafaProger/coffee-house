import { Component } from "react";
import Hero from "./hero/hero";
import AboutBeans from "./about-beans/about-beans";
import Footer from "../../components/footer/footer";
import SearchPanel from "../../components/search-panel/SearchPanel";
import SearchFilter from "../../components/search-filter/SearchFilter";
import Cards from "./cards/Cards";
import Filter from "./filter/Filter";

class OurCoffee extends Component {

	state = {
		activeButton: ''
	}

	handleButtonClicked = (buttonText) => {
		this.setState({activeButton: buttonText})
	}
	
	render() {
		return (
			<>
				<Hero />
				<AboutBeans />
				<Filter onButtonClicked={(e) => this.handleButtonClicked(e)} activeButton={this.state.activeButton}/>
				<Cards/>
				<Footer />
			</>
		);
	}
}

export default OurCoffee;
