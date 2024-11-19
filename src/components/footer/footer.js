import { Component } from "react";
import Header from "../header/header";
import Logo from "../logo-line/logo-line";

import "./footer.css";

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
