import { Component } from "react";

import CoffeApi from "../../../services/CoffeeApi";

import "./Cards.css";
import Card from "../../../components/card/Card";

class Cards extends Component {
	state = {
		allCoffee: [],
		loading: false,
	};

	coffeeApi = new CoffeApi();

	componentDidMount() {
		this.updateState();
	}

	onCoffeeLoading = () => {
		this.setState({ loading: true });
	};

	onCoffeeLoaded = (allCoffee) => {
		this.setState({ allCoffee, loading: false });
	};

	updateState = () => {
		this.onCoffeeLoading();
		this.coffeeApi.getAllCoffee().then(this.onCoffeeLoaded);
	};

	searchEmp = (items) => {
		const { term } = this.props

		if (term().length === 0) return items;

		return items.filter((item) => {
			return item.name.indexOf(term()) > -1;
		});
	};
	
	onFiltered = (arr) => {
		const { activeButton } = this.props;
		switch (activeButton()) {
			case "Central America":
				return arr.filter((item) => item.region === "Central America");
			case "Africa":
				return arr.filter((item) => item.region === "Africa");
			case "South America":
				return arr.filter((item) => item.region === "South America");
			default:
				return arr;
		}
	};

	renderItems(arr) {

		const items = arr.map((item) => {
			return (
				<Card
					key={item.id}
					img={item.img}
					title={item.name}
					price={item.price}
					region={item.region}
				/>
			);
		});
		return <div className='cards__items'>{items}</div>;
	}

	render() {
		const { allCoffee } = this.state;

		const items = this.renderItems(this.onFiltered(this.searchEmp(allCoffee)));

		if (this.state.loading) {
			return (
				<section className='cards'>
					<div className='container'>
						<h1 className='title'>Loading...</h1>
					</div>
				</section>
			);
		}

		return (
			<section className='cards'>
				<div className='container'>{items}</div>
			</section>
		);
	}
}

export default Cards;
