import React, { Component } from 'react';
import CreateRaceForm from './CreateRaceForm';
import Header from './Header';
import Footer from './Footer'

export default class CreateRace extends Component {
  render() {
    return (
        <div className="main-content">
          <div className='create-race'>
          <Header/>
          <CreateRaceForm />
          </div>
          < Footer />
        </div>
    )
  }
}