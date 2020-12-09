import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

export default class Setup extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="lobby-creation">
          <h1>Lobby Creation</h1>
          <p>Race parameters</p>
        </div>
        <RadioGroup onChange={ this.onChange } horizontal>
          <RadioButton value="1km">
            1km
          </RadioButton>
          <RadioButton value="2km">
            2km
          </RadioButton>
          <RadioButton value="1km">
            3km
          </RadioButton>
        </RadioGroup>
      </div>
    )
  }
}
