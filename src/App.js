import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import HowToPlay from "./Pages/How-to-play.js";
import CreateRace from "./Pages/CreateRace.js";
import FindRace from "./Pages/FindRace.js";
import Leaderboard from "./Pages/Leaderboard.js";
import Lobby from "./Pages/Lobby.js";
import Race from "./Pages/Race.js";
import { RaceContainer } from "./Pages/RaceContainer";
import RaceEnd from "./Pages/Race-end.js";

import ApolloClient from "apollo-boost";

import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://catchme-server.herokuapp.com/",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/how-to-play">
            <HowToPlay />
          </Route>
          <Route exact path="/createrace">
            <CreateRace />
          </Route>
          <Route exact path="/findrace">
            <FindRace />
          </Route>
          <Route exact path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route exact path="/lobby">
            <Lobby />
          </Route>
          <Route exact path="/race">
            <Race />
          </Route>
          <Route exact path="/races">
            <RaceContainer />
          </Route>
          <Route exact path="/race-end">
            <RaceEnd />
          </Route>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
