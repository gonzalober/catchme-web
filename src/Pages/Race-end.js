import React, { Component } from "react";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import ScoreCalculator from "../components/RaceEnd";

export default class RaceEnd extends Component {
  render() {
    return (
      <div className="main-content">
        <Header2 />
        <div className="race-end">
          <ScoreCalculator />
        </div>
        <Footer />
      </div>
    );
  }
}
