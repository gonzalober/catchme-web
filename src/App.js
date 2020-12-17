import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import HowToPlay from "./Pages/How-to-play.js";
import CreateRace from "./Pages/CreateRace.js";
import FindRace from "./Pages/FindRace.js";
import Leaderboard from "./Pages/Leaderboard.js";
import Lobby from "./Pages/Lobby.js";
import Race from "./Pages/Race.js";
import RaceEnd from "./Pages/Race-end.js";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://catchme-server.herokuapp.com/",
});


function App() {
  return (
    <div className="container">
      <ApolloProvider client={client}>
        <Router>
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
          <Route exact path="/race-end">
            <RaceEnd />
          </Route>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
