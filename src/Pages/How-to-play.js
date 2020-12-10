import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Header from './Header';

export default class HowToPlay extends Component {
  render() {
    return (
      <div className="main-content">
        < Header/>
        <div className="race-end">
          <h1>How to Play</h1>
            <p>1 - Create race</p>
            <p>2 - Add users</p>
            <p>3 - Start race</p>
            <p>4 - Race ends</p>
        </div>
        <button><Link to={"/"}>Home</Link></button>
        <button><Link to={"/setup"}>Create a race</Link></button>
      </div>
    )
  }
}
