import { Component } from "react";
import Logo from "../logo-line/LogoLine";

class About extends Component {
	render() {
		
		const {clazz, title, img, alt, descr} = this.props;

		return (
			<section className={clazz}>
				<div className='container'>
					<div className='content'>
						<div className='content__img'>
							<img
								src={img}
								alt={alt}
							/>
						</div>
						<div className='content__desrc'>
							<h1 className='title'>{title}</h1>
							<Logo theme='black' />
							<p className='desrc'>
								{descr}
							</p>
						</div>
					</div>
                    <hr/>
				</div>
			</section>
		);
	}
}

export default About;
