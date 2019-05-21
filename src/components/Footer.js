import React, { Component } from 'react'

import {
    Link
} from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <footer className="footer-2 bg-midnight-blue">
                <div className="container">
                    <nav className="pull-left">
                        <ul>
                            <li className="active"><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                        </ul>
                    </nav>
                    <div className="social-btns pull-right">
                        <a href="#">
                            <div className="fui-vimeo"></div>
                            <div className="fui-vimeo"></div>
                        </a>
                        <a href="#">
                            <div className="fui-facebook"></div>
                            <div className="fui-facebook"></div>
                        </a>
                        <a href="#">
                            <div className="fui-twitter"></div>
                            <div className="fui-twitter"></div>
                        </a>
                    </div>
                    <div className="additional-links">
                        Be sure to take a look at our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;