import { Component } from "react";

import CoffeApi from "../../../services/CoffeeApi";

import "./Cards.css";
import DynamicCards from "../../../components/dynamic-cards/DynamicCards";

class Cards extends Component {
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
			return (
				<DynamicCards
                    key={item.id}
					img={item.img}
					title={item.name}
                    region={item.region}
					price={item.price}
				/>
			);
		});

		return <div className='cards__items'>{items}</div>;
	}

	render() {
		if (this.state.loading) {
			return (
				<section
					className='cards'>
					<div className='container'>
						<h1 className="title">Loading...</h1>
					</div>
				</section>
			);
		}
		const { allCoffee } = this.state;

		const items = this.renderItems(allCoffee);

		return (
			<section
				className='cards'>
				<div className='container'>
					{items}
				</div>
			</section>
		);
	}
}

export default Cards;
