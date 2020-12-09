import React, { Component } from 'react';

export default class Leaderboard extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="race-end">
          <h1>Leaderboard</h1>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Time</th>
                <th>Distance</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr key="entries">
                <td> 1st </td>
                <td> David </td>
                <td> 01:54.321 </td>
                <td> 1km </td>
                <td> 9/12/20 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
