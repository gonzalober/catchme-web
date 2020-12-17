import React, { Component } from 'react';
import logo from '../images/logo.gif'
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import UIfx from 'uifx';
import GameOver from '../components/SoundEffects/gameover.mp3'
import BRUH from '../components/SoundEffects/Bruh.MP3'
import CLI from '../components/SoundEffects/Button-sound.mp3'

export default class Home extends Component {
  render() {

    const beep = new UIfx(
      GameOver,
      {
        volume: 0.8,
        throttleMs: 100
      }
    )

    const Bruh = new UIfx(
      BRUH,
      {
        volume: 0.8,
        throttleMs: 100
      }
    )

    const Click = new UIfx(
      CLI,
      {
        volume: 0.8,
        throttleMs: 100
      }
    )

    return (
    <div className="main-content">
      <div className="header">
        <h1>CatchMe</h1>
        <p>The app that keeps you running</p>
      </div>
      <div className="home-buttons">
        <button onClick={() =>  Bruh.play()}><Link to={"/how-to-play"}>How to play</Link></button>
        <button onClick={() =>  Click.play()}><Link to={"/createrace"}>Create a race</Link></button>
        <button onClick={() =>  Click.play()}><Link to={"/findrace"}>Find a race</Link></button>
        <button onClick={() =>  Click.play()}><Link to={"/leaderboard"}>Leaderboard</Link></button>
        <img className="running-boy" src={logo} alt="Logo" />
      </div>
      <Footer />
    </div>

    )
  }
}
