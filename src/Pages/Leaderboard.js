import React, { Component } from 'react';
import Header from './Header';
import LeaderTable from './Table';

export default class Leaderboard extends Component {
  render() {
    return (
      <div className="main-content">
        < Header/>
          <div className="race-end">
            <h1>Leaderboard</h1>
            < LeaderTable/>
          </div>
      </div>
    );
  }
}
