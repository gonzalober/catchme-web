import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class RaceEnd extends Component {
  render() {
    return (
      <div className="main-content">
        <Header />
        <div className="race-end">
          <RaceEnd />
        </div>
        <Footer />
      </div>
    );
  }
}
