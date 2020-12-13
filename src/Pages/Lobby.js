import React, { Component, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Header from "./Header";
import { QUERY_RACE } from "../graphql/queries/race";
import { CREATE_LOCATION } from "../graphql/mutations/createLocation";

export default function Lobby() {
  const location = useLocation();
  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: location.RaceId },
    pollInterval: 2000,
  });
  const [createLocation, { loading, error }] = useMutation(CREATE_LOCATION);
  const history = useHistory();

  console.log(race);
  console.log("race:", location.RaceId);
  console.log("user:", location.me);

  const checkReady = () => {
    let i;
    let readyCounter = 0;
    for (i = 0; i < race.users.length; i++) {
      if (race.users[i].location != null) {
        readyCounter++;
      }
    }
    if (readyCounter === race.users.length) {
      history.push({
        pathname: "./race",
        RaceId: race.id,
        me: location.me,
      });
    } else {
      console.log("Not everyone is ready yet!");
      readyCounter = 0;
    }
  };


  let lat;
  let lng;
  const handleReady = (param) => (e) => {
    // e.preventDefault();
    navigator.geolocation.getCurrentPosition(
      (data) => {
        console.log(data);
        lat = data.coords.latitude;
        lng = data.coords.longitude;
        console.log(lat);
        console.log(lng);
        createLocation({
          variables: {
            startLat: lat,
            startLong: lng,
            endLat: lat,
            endLong: lng,
            distance: 0,
            UserId: param,
          },
          refetchQueries: [
            { query: QUERY_RACE, variables: { id: location.RaceId } },
          ],
          onCompleted: checkReady(),
        });
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
      }
    );
  };

  return (
    <div className="main-content">
      <Header />
      <div className="lobby-page">
        <h1>Lobby</h1>
        <p>Code: {race && race.id}</p>
        <p>Distance: {race && race.distance}m</p>
        <p>Participants:</p>
        <ol>
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
        <button></button>
        <button onClick={checkReady}>Start Race</button>
      </div>
    </div>
  );
}
