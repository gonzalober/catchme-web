import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Setup from './Pages/Race-setup.js'
import Home from './Pages/Home.js';
import Leaderboard from './Pages/Leaderboard.js';
import RaceEnd from './Pages/Race-end.js';

function App() {
  return (
    <Router>
    <div className="container">
        <Route exact path="/"><Home /></Route>
        <Route exact path="/race"><Setup /></Route>
        <Route exact path="/leaderboard"><Leaderboard /></Route>
        <Route exact path="/race-end"><RaceEnd /></Route>
    </div>
    </Router>

)}

export default App;
