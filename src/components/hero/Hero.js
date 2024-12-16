import { Component } from "react";
import Header from "../header/Header";
import Logo from "../logo-line/LogoLine";

class Hero extends Component {
	render() {
		const { clazz, title, descr = null, button = null, } = this.props;

		return (
			<div className={clazz}>
				<div className='container'>
					<Header theme='white' />
					<div className='content'>
						<h1 style={{ fontSize: 40, letterSpacing: 1, marginBottom: 10 }}>
							{title}
						</h1>

						{descr ? (
							<p
								style={{
									fontSize: 26,
									letterSpacing: 1,
									marginTop: 10,
									marginBottom: 0,
									lineHeight: 1.5,
								}}>
								{descr}
							</p>
						) : (
							descr
						)}

						<Logo theme='white' />
						{button ? (
							<a
								href='#about'
								className='btn'>
								{button}
							</a>
						) : (
							button
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Hero;
