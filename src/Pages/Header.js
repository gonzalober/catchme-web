import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.gif'
import home from '../images/home-button.svg'
import plus from '../images/plus-sign.svg'

export default class Header extends Component {
  render() {
    return (
      <div className="heading">
          <h1>CatchMe</h1>
          <div className="header-icons">
            <Link to={"/"}> <img src={home} alt="home-icon" /></Link>
            <Link to={"/createrace"}> <img src={plus} alt="plus-icon" /></Link>
          </div>
          <img className="logo" src={logo} alt="Logo" />
      </div>
    )
  }
}
