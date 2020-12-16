import React, { Component, useState, useEffect } from "react";
import DistanceCalculator from "../components/DistanceCalculator2";
import Header2 from '../components/Header2';
import Map from "../components/Map";
import  Footer from '../components/Footer';
import StopwatchAutoStart from '../components/StopwatchAutoStart';

function Race() {
  return (
    <div className="main-content">
      <DistanceCalculator />
      <Header2/>
        <div className="race-details">
          <Map />
        </div>
      <Footer />
    </div>
  );
}

export default Race;
