import React, { Component } from 'react';
import logo from '../images/logo.gif'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Setup from './Race-setup.js'
import App from '../App'

export default class Home extends Component {
  render() {
    return (
      <div className="main-content">
          <h1>CatchMe</h1>
          <p>The app that keeps you running</p>
          <nav>
        <button><a href="https://www.bbc.co.uk">How to play</a></button>
        <button><Link to="/race">Create a race</Link></button>
        <button><a href="https://www.bbc.co.uk">Leaderboard</a></button>
        </nav>
        <img src={logo} alt="Logo" />
        </div>
    )
  }
}
