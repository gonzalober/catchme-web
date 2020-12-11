import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Setup from './Pages/Race-setup.js'
import Home from './Pages/Home.js';
import Leaderboard from './Pages/Leaderboard.js';
import RaceEnd from './Pages/Race-end.js';
import HowToPlay from './Pages/How-to-play.js';
import Lobby from './Pages/Lobby.js';
import Race from './Pages/Race.js';

function App() {
  return (
    <Router>
    <div className="container">
        <Route exact path="/"><Home /></Route>
        <Route exact path="/setup"><Setup /></Route>
        <Route exact path="/leaderboard"><Leaderboard /></Route>
        <Route exact path="/race-end"><RaceEnd /></Route>
        <Route exact path="/how-to-play"><HowToPlay /></Route>
        <Route exact path="/Lobby"><Lobby /></Route>
        <Route exact path="/race"><Race /></Route>

    </div>
    </Router>

)}

export default App;
