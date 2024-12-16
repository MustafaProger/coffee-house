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
					title={"Не можешь выбрать кофе?"}
				/>
                <About
                    clazz={"perfect-coffee"}
                    title={"Идеальный кофе для каждого"}
                    img={img}
                    alt={"cup of coffee"}
                    descr={
                        "Каждое зерно имеет свою историю, и на нашей странице с рандомным кофе вы можете открыть для себя идеальный сорт, который именно вам подойдет. Мы собрали разнообразие вкусов и ароматов, чтобы каждый наш гость мог найти свой уникальный кофе — от мягких и фруктовых до насыщенных и пряных. Не бойтесь экспериментировать! Порой лучший кофе — это тот, который вы еще не пробовали."
                    }
                />
                <Randomizer coffeeApi={this.props.coffeeApi}/>
                <Footer/>
            </>
        )
    }
}

export default RandomCoffee;