import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Setup from './Pages/Race-setup.js'
import Home from './Pages/Home.js';

function App() {
  return (
    <Router>
    <div className="container">
        <Route exact path="/"><Home /></Route>
        <Route exact path="/race"><Setup /></Route>
    </div>
    </Router>

)}

export default App;
