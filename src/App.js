import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Setup from './Pages/Race-setup.js'
import Home from './Pages/Home.js';

function App() {
  return (
    <Router>
    <div className="container">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/race">
          <Setup />
        </Route>
      </Switch>
    </div>
    </Router>

)}

export default App;
