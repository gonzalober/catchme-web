import React, { Component } from 'react';
import logo from '../images/logo.gif'
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="main-content">
          <h1>CatchMe</h1>
          <p>The app that keeps you running</p>
          <nav>
        <button><a href="https://www.bbc.co.uk">How to play</a></button>
        <button><Link to={"/race"}>Create a race</Link></button>
        <button><a href="https://www.bbc.co.uk">Leaderboard</a></button>
        </nav>
        <img src={logo} alt="Logo" />
        </div>
    )
  }
}
