import { Component } from "react";
import Randomizer from "./randomizer/Randomizer";
// import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Hero from "../../components/hero/Hero";

import './hero/Hero.css'
import About from "../../components/about/About";
import img from './perfect-coffee/perfect-coffee.jpg'

class RandomCoffee extends Component {
    render() {
        return (
            <>
				<Hero
					clazz={"random-coffee"}
					title={"Can’t decide on coffee?"}
				/>
                <About
                    clazz={"perfect-coffee"}
                    title={"The Perfect Coffee for Everyone"}
                    img={img}
                    alt={"cup of coffee"}
                    descr={
                        "Every bean has its own story, and on our random coffee page, you can discover the perfect variety just for you. We’ve curated a selection of flavors and aromas so that every guest can find their unique coffee—from smooth and fruity to rich and spicy. Don’t be afraid to experiment! Sometimes, the best coffee is the one you haven’t tried yet."
                    }
                />
                <Randomizer coffeeApi={this.props.coffeeApi}/>
                <Footer/>
            </>
        )
    }
}

export default RandomCoffee;