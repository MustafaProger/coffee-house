import { Component } from "react";
import Hero from "./hero/hero";
import AboutBeans from "./about-beans/about-beans";
import Footer from "../../components/footer/footer";

class OurCoffee extends Component {
	render() {
		return (
			<>
				<Hero />
				<AboutBeans />
				<Footer />
			</>
		);
	}
}

export default OurCoffee;