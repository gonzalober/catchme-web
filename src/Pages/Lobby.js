import React, { Component, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Header2 from "../components/Header2";
import { QUERY_RACE } from "../graphql/queries/race";
import { CREATE_LOCATION } from "../graphql/mutations/createLocation";
import { UPDATE_RACE_START_TIME } from "../graphql/mutations/updateRaceStartTime";
import Footer from "../components/Footer"

export default function Lobby() {
  //define variables
  const [isEveryoneReady, setIsEveryoneReady] = React.useState(false);
  const location = useLocation();
  const history = useHistory();
  //define race query and mutations
  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: location.RaceId },
    pollInterval: 2000,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    onCompleted: async () => {
      await checkReady();
      await checkStarted();
    }
  });
  const [createLocation] = useMutation(CREATE_LOCATION);
  const [updateRaceStartTime] = useMutation(UPDATE_RACE_START_TIME);
  
  const checkReady = () => {
    let i;
    let readyCounter = 0;
    for (i = 0; i < race.users.length; i++) {
      if (race.users[i].location != null) {
        readyCounter++;
      }
    }
    if (readyCounter === race.users.length) {
      setIsEveryoneReady(true);
    } else {
      setIsEveryoneReady(false);
    }
  };

  const checkStarted = () => {
    if(race.startTime != null) {
      let k;
      for (k = 0; k < race.users.length; k++) {
        if(race.users[k].id === location.me) {
          console.log("DETAILS:", race.users[k].location.endLat,race.users[k].location.endLong,race.users[k].location.distance,race.users[k].location.id)
          history.push({
            pathname: "./race",
            RaceId: race.id,
            me: location.me,
            myEndLat: race.users[k].location.endLat,
            myEndLong: race.users[k].location.endLong,
            myDistance: race.users[k].location.distance,
            myLocId: race.users[k].location.id,
          });
        }
      }
    }
  }

  const setStartTime = () => {
    updateRaceStartTime({
      variables: {
        id: location.RaceId,
        startTime: Date.now(),
      },
    });
  }

  const handleReady = (param) => (e) => {
    createLocation({
      variables: {
        startLat: 0,
        startLong: 0,
        endLat: 0,
        endLong: 0,
        distance: 0,
        UserId: param,
      },
      refetchQueries: [
        { query: QUERY_RACE, variables: { id: location.RaceId } },
      ],
    }); 
  };

  return (
    <div className="main-content">
      <Header2 />
      <div className="lobby-page">
        <h2>Lobby</h2>
        <p>Code: {race && race.id}</p>
        <p>Distance: {race && race.distance}m</p>
        <p>Participants:</p>
        <ol className="user-details">
          {race &&
            race.users &&
            race.users.map((user) => (
              <li key={user.id}>
                {user.username}
                {user.id === location.me ? (
                  <button onClick={handleReady(user.id)}>Ready!</button>
                ) : null}
              </li>
            ))}
        </ol>
        {location.isHost && isEveryoneReady &&
          <button onClick={setStartTime}>Start Race</button>}
      </div>
      <Footer />
    </div>
  );
}