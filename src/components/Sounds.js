import React, { Component } from "react";
import GameOver from '../components/SoundEffects/gameover.mp3'
import UIfx from "uifx";

export default class Sound extends Component {
  render() {
    const beep = new UIfx(GameOver, {
      volume: 0.8,
      throttleMs: 100,
    });
    return(
      <></>
    )
  }
 
}
