import { Component } from "react";
import Logo from "../../../components/logo-line/LogoLine";
import img from './about-beans.png'
import './AboutBeans.css'

class AboutBeans extends Component {
	render() {
		return (
			<section className='about-beans'>
				<div className='container'>
					<div className='content'>
						<div className='content__img'>
							<img
								src={img}
								alt="girl's drinking coffee"
							/>
						</div>
						<div className='content__desrc'>
							<h1 className='title'>О наших зернах</h1>
							<Logo theme='black' />
							<p className='subtitle'>
								От первого аромата до последнего глотка — наш кофе это
								путешествие вкуса и мастерства. Каждое зерно тщательно
								отбирается с лучших плантаций, чтобы гарантировать качество,
								которое говорит само за себя. Благодаря тонкому искусству
								обжарки, мы раскрываем весь потенциал каждого сорта, создавая
								напиток, который поражает своей мягкостью, насыщенным ароматом и
								характером.
							</p>
						</div>
					</div>
                    <hr/>
				</div>
			</section>
		);
	}
}

export default AboutBeans;
