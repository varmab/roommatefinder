import React, { Component } from 'react'
import {
    Redirect,
    Link
} from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logoutStatus: false,
            loggedIn: false,
            fullName: ''
        }

        this.getLoggedInUser = this.getLoggedInUser.bind(this)
    }

    getLoggedInUser() {
        fetch('/api/users/me', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
        })
            .then(resp => resp.json())
            .then(user => {
                this.setState({
                    fullName: user.fullName,
                    loggedIn: true
                })
            })
            .catch((err) => {
                console.log(JSON.stringify(err))
            })
    }

    logout() {
        localStorage.removeItem("token");
        this.setState({
            logoutStatus: true,
            loggedIn: false,
        })

    }


    componentDidMount() {
        var token = localStorage.getItem("token");
        if (token) {
            this.getLoggedInUser();
        }
    }

    render() {
        var token = localStorage.getItem("token");
        console.log(token)

        if (this.state.logoutStatus) {
            return (<Redirect to="/login" />)
        }

        return (
            <header className="header-3">
                <div className="container">
                    <div className="row">
                        <nav className="navbar col-sm-12" role="navigation">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle"></button>
                                <a className="brand" href="/"><img src="startup/common-files/icons/Infinity-Loop@2x.png"
                                    width="50" height="50" alt="" />Roommate Finder</a>
                            </div>
                            <div className="collapse navbar-collapse pull-right">
                                <ul className="nav pull-left">
                                    <li><Link to="/">HOME</Link></li>
                                    <li><Link to="/about">ABOUT</Link></li>

                                    {
                                        (this.state.loggedIn == true) ? (<React.Fragment><li><Link to="/newrequest">POST NEW REQUEST</Link></li><li><Link to="/myrequests">MY REQUESTS</Link></li></React.Fragment>) : <li><Link to="/register">REGISTER</Link></li>
                                    }
                                </ul>
                                <form className="navbar-form pull-left">
                                    {
                                        (this.state.loggedIn == true) ?
                                            (<button onClick={this.logout} className="btn btn-primary">Logout</button>)
                                            :
                                            (<Link className="btn btn-primary" to="/login">SIGN IN</Link>)
                                    }
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="header-background"></div>
            </header>
        )
    }
}

export default Header;
