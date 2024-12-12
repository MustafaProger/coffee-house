import { Component } from "react";
import Hero from "./hero/hero";
import AboutBeans from "./about-beans/about-beans";
import Footer from "../../components/footer/footer";
import SearchPanel from "../../components/search-panel/SearchPanel";
import SearchFilter from "../../components/search-filter/SearchFilter";

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
				<div style={{display: 'flex', justifyContent: 'center', margin: "50px 0px"}}>
					<SearchPanel />
					<SearchFilter onButtonClicked={(e) => this.handleButtonClicked(e)} activeButton={this.state.activeButton}/>
				</div>
				<Footer />
			</>
		);
	}
}

export default OurCoffee;
