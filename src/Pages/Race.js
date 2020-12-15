import React, { Component, useState, useEffect } from "react";
import Header2 from '../components/no-race-header';
import DistanceCalculator from "../components/DistanceCalculator";
import Map from "../components/Map";
import  Footer from '../components/Footer';


function Race() {
  return (
    <div className="main-content">
      <Header2/>
        <div className="race-details">
          <Map />
        </div>
      <DistanceCalculator/>
      <Stopwatch />
      <Footer />
    </div>
  );
}

export default Race;
