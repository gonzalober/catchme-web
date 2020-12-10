import React, { Component } from 'react';
import Demo from './Form';
import Header from './Header';
import logo from '../images/logo.gif'

export default class Setup extends Component {
  render() {
    return (
      <div className="main-content">
        < Header/>
          <div className="lobby-creation">
            <h1>CatchMe</h1>
            <p>Race parameters</p>
          </div>
        <Demo />
      </div>
    )
  }
}
