import React, { Component } from 'react';
import logo from '../images/logo.gif'
import {Link} from 'react-router-dom';


export default class Home extends Component {
  render() {
    return (
    <div className="main-content">
      <div className="header">
        <h1>CatchMe</h1>
        <p>The app that keeps you running</p>
      </div>
      <div className="home-buttons">
        <button><Link to={"/how-to-play"}>How to play</Link></button>
        <button><Link to={"/createrace"}>Create a race</Link></button>
        <button><Link to={"/leaderboard"}>Leaderboard</Link></button>
      </div>
        <img className="running-boy" src={logo} alt="Logo" />
    </div>

    )
  }
}
