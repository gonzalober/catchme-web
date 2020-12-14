import React, { Component } from 'react';
import FindRaceForm from '../components/FindRaceForm';
import Header from '../components/Header';
import logo from '../images/logo.gif'

export default class FindRace extends Component {
  render() {
    return (
      <div className="main-content">
        <Header/>
          <div className="race-finder">
            <p>Race Finder</p>
          </div>
        <FindRaceForm />
      </div>
    )
  }
}