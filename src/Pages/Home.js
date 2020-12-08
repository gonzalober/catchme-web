import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="header">
          <h1>Catch Me</h1>
          <p>The app that keeps you running</p>
        </div>
        <button>How to play</button>
        <button>Create a race</button>
        <button>Leaderboard</button>
      </div>
    )
  }
}
