import React, { Component, useState, useEffect } from 'react';
import Header from './Header';
import ProgressBar from './ProgressBar.js'


function Race() {
  const [completed, setCompleted] = useState(0);
  const [completed2, setCompleted2] = useState(1);
  const [completed3, setCompleted3] = useState(1);
  const [completed4, setCompleted4] = useState(1);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    setInterval(() => setCompleted2(Math.floor(Math.random() * 100) + 1), 2000);
    setInterval(() => setCompleted3(Math.floor(Math.random() * 100) + 1), 2000);
    setInterval(() => setCompleted4(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

    return (
      <div className="main-content">
        < Header/>
          <div className="race">
           <lable>Kiril <ProgressBar bgcolor={"blue"} completed={completed} /></lable>
            David <ProgressBar bgcolor={"red"} completed={completed2} />
            Mace <ProgressBar bgcolor={"green"} completed={completed3} />
            Gonzalo <ProgressBar bgcolor={"orange"} completed={completed4} /> 
          </div>
      </div>
    )
  }

export default Race;
