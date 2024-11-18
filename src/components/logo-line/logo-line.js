import { Component } from "react";

import logo from "./logo-line.svg";
import './logo-line.css'

class Logo extends Component {
	render() {
		return (
			<div className="logo-line">
				<div className='line' />
				<img
					src={logo}
					alt='coffee'
				/>
				<div className='line' />
			</div>
		);
	}
}

export default Logo;