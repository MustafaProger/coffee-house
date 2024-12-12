import React, { Component } from "react";
import reportWebVitals from "../../reportWebVitals";

import Hero from "./hero/Hero";
import About from "./about/About";
import OurBest from "./our-best/OurBest";
import Footer from "../../components/footer/Footer";
import Animation from "../../components/animation/animation";


class CoffeeHouse extends Component {
	render() {
		return (
			<>
				<Animation />
				<Hero />
				<About />
				<OurBest />
				<Footer />
			</>
		);
	}
}

reportWebVitals();

export default CoffeeHouse;