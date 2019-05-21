import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AboutPage from './containers/AboutPage'
import LoginPage from './containers/LoginPage'
import RegisterPage from './containers/RegisterPage'
import HomePage from './containers/HomePage'
import NewRoommateRequestPage from './containers/NewRoommateRequestPage'
import MyRequestsPage from './containers/MyRequestsPage'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <Switch>
              <Route exact  path="/" component={HomePage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/login" component={LoginPage}/>
              <Route path="/register" component={RegisterPage}/>
              <Route path="/newrequest" component={NewRoommateRequestPage}/>
              <Route path="/myrequests" component={MyRequestsPage}/>
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
