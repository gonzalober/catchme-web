import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Header from './Header';

export default class Lobby extends Component {
  render() {
    return (
      <div className="main-content">
        < Header/>
          <div className="race-end">
            <h1>Lobby</h1>
              <p>Lobby Code: AHFB624</p>
              <p>Participants: User 1</p>
              <button><Link to={"/game"}>Start Race</Link></button>
              <p>Edit race settings</p>
          </div>
            <button><Link to={"/setup"}>Edit Race Settings</Link></button>
      </div>
    )
  }
}
