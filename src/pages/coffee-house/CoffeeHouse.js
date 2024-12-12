import React, { Component } from "react";
import reportWebVitals from "../../reportWebVitals";

import Hero from "./hero/Hero";
import About from "./about/About";
import OurBest from "./our-best/OurBest";
import Footer from "../../components/footer/Footer";
import Animation from "../../components/animation/animation";
import CoffeApi from "../../services/CoffeeApi";

class CoffeeHouse extends Component {
	state = {
		allCoffee: [],
		loading: false,
	};

	coffeeApi = new CoffeApi();

	componentDidMount() {
		this.updateState();
	}

	updateState = () => {
		this.onCoffeeLoading();

		this.coffeeApi.getAllCoffee().then(this.onCoffeeLoaded);
	};

	onCoffeeLoading = () => {
		this.setState({ loading: true });
	};

	onCoffeeLoaded = (allCoffee) => {
		this.setState({ allCoffee, loading: false });
	};

	render() {
		return (
			<>
				<Animation />
				<Hero />
				<About />
				{this.state.loading ? (
					<section
						className='our-best'>
						<div className='container'>
							<h1 className='title our-best__title'>Наше лучшее</h1>
							<h1 className='title'>Loading...</h1>
						</div>
					</section>
				) : (
					<OurBest allCoffee={this.state.allCoffee} />
				)}
				<Footer />
			</>
		);
	}
}

reportWebVitals();

export default CoffeeHouse;