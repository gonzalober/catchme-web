import React, { Component } from 'react';
import Form from './Form';
import Header from './Header';
import logo from '../images/logo.gif'

export default class Setup extends Component {
  render() {
    return (
      <div className="main-content">
        < Header/>
          <div className="lobby-creation">
            <p>Race parameters</p>
          </div>
        <Form />
      </div>
    )
  }
}
