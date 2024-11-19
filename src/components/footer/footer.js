import { Component } from "react";
import Header from "../header/header";
import Logo from "../logo-line/logo-line";

import './footer.css'

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <Header theme="black"/>
                <Logo theme="black"/>
            </footer>
        )
    }
}

export default Footer;