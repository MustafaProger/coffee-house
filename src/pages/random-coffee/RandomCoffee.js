import { Component } from "react";
import Randomizer from "./randomizer/Randomizer";
// import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Hero from "../../components/hero/Hero";

import './hero/Hero.css'

class RandomCoffee extends Component {
    render() {
        return (
            <>
				<Hero
					clazz={"random-coffee"}
					title={"Не можешь выбрать кофе?"}
				/>
                <Randomizer coffeeApi={this.props.coffeeApi}/>
                <Footer/>
            </>
        )
    }
}

export default RandomCoffee;