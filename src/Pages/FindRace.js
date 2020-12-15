import React, { Component } from 'react';
import FindRaceForm from '../components/FindRaceForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class FindRace extends Component {
  render() {
    return (
      <div className="main-content">
        <Header/>
          <div className="race-finder">
            <h2>Race Finder</h2>
            <FindRaceForm />
          </div>
          <Footer />
      </div>
    )
  }
}