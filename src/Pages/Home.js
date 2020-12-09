import React, { Component } from 'react';
import logo from '../images/logo.gif'


export default class Home extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="header">
          <h1>CatchMe</h1>
          <p>The app that keeps you running</p>
        </div>
        <button><a href="https://www.bbc.co.uk">How to play</a></button>
        <button><a href="https://www.bbc.co.uk">Create a race</a></button>
        <button><a href="https://www.bbc.co.uk">Leaderboard</a></button>
        <img src={logo} alt="Logo" />
      </div>
    )
  }
}
