import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.gif'


export default class Header extends Component {
  render() {
    return (
      <div className="heading">
          <h1>CatchMe</h1>
          <button><Link to={"/"}>Home</Link></button>
          <button><Link to={"/setup"}>Create a race</Link></button>
          <img className="logo" src={logo} alt="Logo" />
      </div>
    )
  }
}
