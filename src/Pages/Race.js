import React, { Component, useState, useEffect } from "react";
import Header from "../components/Header";
//import Timer from "../components/Timer";
import DistanceCalculator from "../components/DistanceCalculator";
import Map from "../components/Map";

function Race() {
  return (
    <div className="main-content">
      <Header />
      <DistanceCalculator />
      <Map />
      <div className="race"></div>
    </div>
  );
}

export default Race;
