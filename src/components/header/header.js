import { Component } from "react";

import logo from "./logo.svg";
import './header.css'

class Header extends Component {
	render() {
		return (
			<header>
				<nav className="navbar">
					<a
						href='#house'
						className='link'>
						<img
							src={logo}
							alt='logo'
						/>
						Кофейный дом
					</a>
					<a
						href='#our-coffee'
						className='link'>
						О нашем кофе
					</a>
					<a
						href='#for-lover'
						className='link'>
						Для настоящих ценителей
					</a>
				</nav>
			</header>
		);
	}
}

export default Header;
