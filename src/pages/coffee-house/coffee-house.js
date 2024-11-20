import React, { Component } from "react";
import reportWebVitals from "../../reportWebVitals";

import Hero from "./hero/hero";
import About from "./about/about";
import OurBest from "./our-best/our-best";
import Footer from "../../components/footer/footer";
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