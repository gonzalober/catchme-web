import React, { Component } from 'react';
import RaceForm from './RaceForm';
import Header from './Header';
import logo from '../images/logo.gif'

export default class CreateRace extends Component {
  render() {
    return (
      <div className="main-content">
        <Header/>
          <div className="lobby-creation">
            <p>Race parameters</p>
          </div>
        <RaceForm />
      </div>
    )
  }
}