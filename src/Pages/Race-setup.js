import React, { Component } from 'react';
import Demo from './Form';


export default class Setup extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="lobby-creation">
          <h1>CatchMe</h1>
          <p>Race parameters</p>
        </div>
        <Demo />
      </div>
    )
  }
}
