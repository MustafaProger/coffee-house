import Header from "../../../components/header/Header";
import Logo from "../../../components/logo-line/LogoLine";

import "./Hero.css";

function Hero() {
	return (
		<section className='hero_our-coffee'>
			<div className='container'>
				<Header theme="white"/>
				<div className='content'>
					<h1 style={{ fontSize: 40, letterSpacing: 1, marginBottom: 10 }}>
						О нашем кофе
					</h1>
					<Logo theme="white"/>
				</div>
			</div>
		</section>
	);
}

export default Hero;