import React, { Component } from 'react';
import CreateRaceForm from '../components/CreateRaceForm';
import Header2 from '../components/Header2';
import Footer from '../components/Footer'

export default class CreateRace extends Component {
  render() {
    return (
        <div className="main-content">
          <Header2/>
          <div className='create-race'>
          <CreateRaceForm />
          </div>
          < Footer />
        </div>
    )
  }
}