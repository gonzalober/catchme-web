import React, { Component } from 'react';
import map from '../images/runmap.gif';
import Header from './Header';
import Timer from '../components/Timer'
import DistanceCalculator from '../components/DistanceCalculator';
export default class Race extends Component {
  render() {
    return (
      <div className="main-content">
        <Header/>
        <Timer/>
        <DistanceCalculator/>
          <div className="race">
            <img src={map} alt="Map" />
            <h4>Race Details:</h4>
            <p>David</p>
            <p>Time: 8min 25sec</p>
            <p>Distance: 1000m</p>
          </div>
      </div>
    )
  }
}

