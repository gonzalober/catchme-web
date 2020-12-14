import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class HowToPlay extends Component {
  render() {
    return (
      <div className="main-content">
        < Header/>
        <div className="how-to-play">
          <h2>How to Play</h2>
          <p>1 - Create race</p>
          <p>2 - Add users</p>
          <p>3 - Start race</p>
          <p>4 - Race ends</p>
        </div>
        < Footer />
      </div>
    )
  }
}
