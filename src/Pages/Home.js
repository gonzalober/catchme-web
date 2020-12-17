import React, { Component } from 'react';
import logo from "../assets/images/logo.gif";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import UIfx from "uifx";
import BRUH from "../assets/SoundEffects/Bruh.MP3";
import CLI from "../assets/SoundEffects/buttonClick.mp3";

export default class Home extends Component {
  render() {

    const Bruh = new UIfx(
      BRUH,
      {
        volume: 0.8,
        throttleMs: 100
      }
    )

    const buttonClick = new UIfx(
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
          <button onClick={() =>  buttonClick.play()}><Link to={"/createrace"}>Create a race</Link></button>
          <button onClick={() =>  buttonClick.play()}><Link to={"/findrace"}>Find a race</Link></button>
          <button onClick={() =>  buttonClick.play()}><Link to={"/leaderboard"}>Leaderboard</Link></button>
          <img className="running-boy" src={logo} alt="Logo" />
        </div>
        <Footer/>
      </div>
    );
  }
}
