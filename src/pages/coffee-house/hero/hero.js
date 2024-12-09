import { Component } from "react";
import Header from "../../../components/header/header";
import Logo from "../../../components/logo-line/logo-line";

import "./hero.css";

class Hero extends Component {

	render() {
		return (
			<main className='main'>
				<div className='container'>
					<Header theme='white' />
					<div className='content'>
						<h1 style={{ fontSize: 40, letterSpacing: 1, marginBottom: 10 }}>
							Все, что вы цените в кофе
						</h1>
						<p
							style={{
								fontSize: 26,
								letterSpacing: 1,
								marginTop: 10,
								marginBottom: 0,
								lineHeight: 1.5,
							}}>
							Мы наполняем ваш день энергией и вкусом. Готовы насладиться нашими
							лучшими зернами?
						</p>
						<Logo theme='white' />
						<a
							href='#about'
							className='btn'>
							Узнать больше
						</a>
					</div>
				</div>
			</main>
		);
	}
}

export default Hero;
