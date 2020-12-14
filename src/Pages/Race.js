import React, { Component, useState, useEffect } from 'react';
import map from '../images/runmap.gif';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar.js';
import Timer from '../components/Timer';
import DistanceCalculator from '../components/DistanceCalculator';

function Race() {
  const [completed1, setCompleted1] = useState(1);
  const [completed2, setCompleted2] = useState(2);
  const [completed3, setCompleted3] = useState(3);
  const [completed4, setCompleted4] = useState(4);

  useEffect(() => {
    setInterval(() => setCompleted1(Math.floor(Math.random() * 100) + 1), 2000);
    setInterval(() => setCompleted2(Math.floor(Math.random() * 100) + 1), 2000);
    setInterval(() => setCompleted3(Math.floor(Math.random() * 100) + 1), 2000);
    setInterval(() => setCompleted4(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);


  function query() {
    let users = ["Kiril", "David", "Mace", "Gonzalo"]
    if(users.length === 1) {
      return <div>{users[0]}<ProgressBar bgcolor={"white"} completed={completed1}/></div>
    } else if(users.length === 2) {
      return <div>{users[0]}<ProgressBar bgcolor={"white"} completed={completed1}/>
      {users[1]}<ProgressBar bgcolor={"white"} completed={completed2}/></div>
    } else if(users.length === 3) {
      return <div>{users[0]}<ProgressBar bgcolor={"white"} completed={completed1}/>
      {users[1]}<ProgressBar bgcolor={"white"} completed={completed2}/>
      {users[2]}<ProgressBar bgcolor={"white"} completed={completed3}/></div>
    } else if(users.length == 4) {
      return <div>{users[0]}<ProgressBar bgcolor={"white"} completed={completed1}/>
      {users[1]}<ProgressBar bgcolor={"white"} completed={completed2}/>
      {users[2]}<ProgressBar bgcolor={"white"} completed={completed3}/>
      {users[3]}<ProgressBar bgcolor={"white"} completed={completed4}/></div>
    }
  }



  return (
    <div className="main-content">
      <Header/>
      <Timer/>
      <DistanceCalculator/>
        <div className="race">
         {query()}
        </div>
    </div>
  )
}






export default Race;
