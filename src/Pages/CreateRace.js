import React, { Component } from 'react';
import CreateRaceForm from '../components/CreateRaceForm';
import Header from '../components/Header';
import Footer from '../components/Footer'

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