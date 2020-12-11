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
import { UsersContainer } from './container/UsersContainer.js'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";

function App() {

  const client = new ApolloClient({
    uri: 'https://catchme-server.herokuapp.com/'
  });

  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="container">
          
          <Route exact path="/users">
            <UsersContainer />
              <main>
                <p>I am a user</p>
              </main>
          </Route>

          <Route exact path="/"><Home /></Route>
          <Route exact path="/setup"><Setup /></Route>
          <Route exact path="/leaderboard"><Leaderboard /></Route>
          <Route exact path="/race-end"><RaceEnd /></Route>
          <Route exact path="/how-to-play"><HowToPlay /></Route>
          <Route exact path="/Lobby"><Lobby /></Route>
      </div>
      </Router>
    </ApolloProvider>

)}

export default App;
