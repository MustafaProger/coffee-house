import { Component } from "react";
import StaticCards from "../../../components/static-cards/static-cards";
import CoffeApi from "../../../services/CoffeeApi";

import "./our-best.css";

class OurBest extends Component {
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

	renderItems(arr) {
		const items = arr.map((item, id) => {
			if (id >= 3) {
				return null;
			}

			return (
				<StaticCards
					img={item.img}
					title={item.name}
					price={item.price + " $"}
					key={item.id}
				/>
			);
		});

		return <div className='cards cards-static'>{items}</div>;
	}

	render() {
		if (this.state.loading) {
			return (
				<section
					className='our-best'
					id='our-best'>
					<div className='container'>
						<h1 className='title our-best__title'>Наше лучшее</h1>
						<h1 className="title">Loading...</h1>
					</div>
				</section>
			);
		}
		const { allCoffee } = this.state;

		const items = this.renderItems(allCoffee);

		return (
			<section
				className='our-best'
				id='our-best'>
				<div className='container'>
					<h1 className='title our-best__title'>Наше лучшее</h1>
					{items}
				</div>
			</section>
		);
	}
}

export default OurBest;
