import React from "react";
import DistanceCalculator from "../components/DistanceCalculator";
import Header2 from "../components/Header2";
import Map from "../components/Map";
import Footer from "../components/Footer";
import StopwatchAutoStart from "../components/StopwatchAutoStart";
import theme from '../assets/SoundEffects/theme.mp3'
import UIfx from 'uifx';

function Race() {
  const mytheme = new UIfx(
    theme,
    {
      volume: 0.8,
      throttleMs: 100
    }
  )
  mytheme.play()
  return (
    <div className="main-content">
      <DistanceCalculator />
      <Header2 />
      <div className="race-details">
        <Map />
        <br></br>
        <StopwatchAutoStart />
      </div>
      <Footer />
    </div>
  );
}

export default Race;
