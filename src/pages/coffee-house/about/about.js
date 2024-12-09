import { Component } from "react";

import Logo from "../../../components/logo-line/logo-line";
import "./about.css";

class About extends Component {
	render() {
		return (
			<section
				className='about'
				id='about'>
				<div className='container'>
					<div className='title about__title'>О нас</div>
					<Logo theme='black' />
					<div className='subtitle about__subtitle'>
					 	О нас Мы — команда, для которой каждый стакан кофе — это
						искусство и страсть. Мы отбираем только лучшие зерна с самых
						надежных плантаций, чтобы предоставить вам напитки, которые
						воплощают в себе качество. Через мастерство обжарки мы раскрываем
						уникальные нотки каждого сорта, создавая кофе с мягким вкусом,
						насыщенным ароматом и характером.
						<br />
						<br />
						Наш кофе — это не просто напиток, это целая философия. Будь то
						бодрящий эспрессо утром или согревающий латте вечером, мы создаем
						кофе, который дарит вам не только вкус, но и атмосферу. Мы стремимся
						соединить традиции с современными подходами, чтобы каждая чашка
						рассказывала о нашем стремлении к совершенству.
					</div>
				</div>
			</section>
		);
	}
}

export default About;
