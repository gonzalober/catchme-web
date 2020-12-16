import React, { Component, useState, useEffect } from "react";
import Header2 from '../components/Header2';
import DistanceCalculator from "../components/DistanceCalculator";
import Map from "../components/Map";
import  Footer from '../components/Footer';
import StopwatchAutoStart from '../components/StopwatchAutoStart';


function Race() {
  return (
    <div className="main-content">
      <Header2/>
        <div className="race-details">
          <Map />
        </div>
      <DistanceCalculator/>
      <Footer />
    </div>
  );
}

export default Race;
