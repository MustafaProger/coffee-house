import { Component } from "react";
import Header from "../header/Header";
import Logo from "../logo-line/LogoLine";

import "./Footer.css";

class Footer extends Component {
	render() {
		return (
			<footer className='footer'>
				<div className='container'>
					<Header theme='black' />
					<Logo theme='black' />
				</div>
			</footer>
		);
	}
}

export default Footer;
