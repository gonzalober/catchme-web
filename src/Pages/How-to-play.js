import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class HowToPlay extends Component {
  render() {
    return (
      <div className="main-content">
        < Header/>
        <div className="how-to-play">
          <h2>How to Play</h2>
          <p>1 - Create race</p>
          <p>2 - Add users</p>
          <p>3 - Click ready</p>
          <p>4 - Start race -(Only host)</p>
          <p>5 - Race ends</p>
        </div>
        <Footer />
      </div>
    )
  }
}
