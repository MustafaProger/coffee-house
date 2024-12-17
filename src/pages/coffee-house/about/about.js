import { Component } from "react";

import Logo from "../../../components/logo-line/LogoLine";
import "./About.css";

class About extends Component {
	render() {
		return (
			<section
				className='about'
				id='about'>
				<div className='container'>
					<h1 className='title about__title'>About Us</h1>
					<Logo theme='black' />
					<div className='about__subtitle descr'>
						We are a team for whom every cup of coffee is an art and passion. We
						select only the finest beans from the most trusted plantations to
						offer you beverages that embody quality. Through the craft of
						roasting, we unveil the unique notes of each variety, creating
						coffee with a smooth taste, rich aroma, and character.
						<br />
						<br />
						Our coffee is not just a drink—it’s a philosophy. Whether it’s a
						refreshing espresso in the morning or a warming latte in the
						evening, we create coffee that delivers not only flavor but also
						atmosphere. We strive to combine traditions with modern approaches
						so that every cup tells the story of our pursuit of perfection.
					</div>
				</div>
			</section>
		);
	}
}

export default About;