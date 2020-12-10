import React, { Component } from 'react';
import logo from '../images/logo.gif'
import { Link } from "react-router-dom";
import Setup from './Race-setup.js'
import App from '../App'
import Leaderboard from './Leaderboard'
import HowToPlay from './Leaderboard'

export default class Home extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="header">
          <h1>CatchMe</h1>
          <p>The app that keeps you running</p>
        </div>
          <button><Link to={"/how-to-play"}>How to play</Link></button>
          <button><Link to={"/setup"}>Create a race</Link></button>
          <button><Link to={"/leaderboard"}>Leaderboard</Link></button>
          <img src={logo} alt="Logo" />
      </div>
    )
  }
}
