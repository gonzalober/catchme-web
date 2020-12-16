import React, { Component, useState, useEffect } from "react";
import Header2 from "../components/no-race-header";
//import DistanceCalculator from "../components/DistanceCalculator";
import DistanceCalculator from "../components/DistanceCalculator2";
import Map from "../components/Map";
import Footer from "../components/Footer";

function Race() {
  return (
    <div className="main-content">
      <Header2 />
      <div className="race-details">
        <Map />
      </div>
      <DistanceCalculator />
      <Footer />
    </div>
  );
}

export default Race;
