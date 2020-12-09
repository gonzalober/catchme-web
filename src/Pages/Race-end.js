import React, { Component } from 'react';

export default class RaceEnd extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="race-end">
          <h1>Race Complete!</h1>
          <p>Date of Race: 9/12/20</p>
          <p>Time Finished: 10:32a</p>
          <p>Distance Completed: 1km</p>
          <p>End Time: 01:54.543 </p>
          <p>Date of Race: 9/12/20</p>
        </div>
        <button><Link to={"/submit"}>Submit Time to Leaderboard</Link></button>
        <button><Link to={"/race"}>Create a race</Link></button>
      </div>
    )
  }
}
