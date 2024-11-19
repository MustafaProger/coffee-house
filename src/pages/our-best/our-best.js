import { Component } from "react";
import StaticCards from "../../components/static-cards/static-cards";

import "./our-best.css";
import img_1 from "./img/img-1.svg";
import img_2 from "./img/img-2.svg";
import img_3 from "./img/img-3.svg";

class OurBest extends Component {
	render() {
		return (
			<section className='our-best'>
				<div className='container'>
					<h1 className='title our-best__title'>Наше лучшее</h1>
					<div className='cards cards-static'>
						<StaticCards
							img={img_1}
							title='Solimo Coffee Beans 2 kg'
							price='1 019 руб.'
						/>
						<StaticCards
							img={img_2}
							title='Presto Coffee Beans 1 kg'
							price='1 519 руб.'
						/>
						<StaticCards
							img={img_3}
							title='AROMISTICO Coffee 1 kg'
							price='664 руб.'
						/>
					</div>
				</div>
			</section>
		);
	}
}

export default OurBest;
