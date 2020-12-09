import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class RaceEnd extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="race-end">
          <h1>Race Complete!</h1>
            <p>Date of Race: 9/12/20</p>
            <p>Time Finished: 10:32am</p>
            <p>Distance Completed: 1km</p>
            <p>End Time: 01:54.543 </p>
            <p>Date of Race: 9/12/20</p>
        </div>
        <button>Submit Time</button>
        <button><Link to={"/"}>Home</Link></button>
        <button><Link to={"/setup"}>Create a race</Link></button>
      </div>
    )
  }
}
