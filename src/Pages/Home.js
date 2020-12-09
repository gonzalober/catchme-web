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
        <button>How to play</button>
        <button>Create a race</button>
        <button>Leaderboard</button>
        <img src={logo} alt="Logo" />
      </div>
    )
  }
}
