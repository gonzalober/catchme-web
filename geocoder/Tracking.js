import React, { Component, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Header from "./Header";
import { QUERY_RACE } from "../graphql/queries/race";
import { CREATE_LOCATION } from "../graphql/mutations/createLocation";

export default function Lobby() {
  const location = useLocation();
  // const [queryRace, {loading, error}] = useQuery(QUERY_RACE);
  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: location.RaceId },
    pollInterval: 5000,
    pollInterval: 2000,
  });
  const [createLocation, { loading, error }] = useMutation(CREATE_LOCATION);
  const history = useHistory();

  console.log(race);
  console.log(location.RaceId);
  console.log("race:", location.RaceId);
  console.log("user:", location.me);

  const checkReady = () => {
    setTimeout(setInterval(checkStartLocations, 1000), 3000);
  };

  const checkStartLocations = () => {
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
      console.log("counter:", readyCounter);
      readyCounter = 0;
    }
  };
  //where	φ is latitude, λ is longitude, R is earth’s radius (mean radius = 6,371km);
  //note that angles need to be in radians to pass to trig functions!
  // const φ1 = lat1 * Math.PI/180, φ2 = lat2 * Math.PI/180, Δλ = (lon2-lon1) * Math.PI/180, R = 6371e3;
  // const dist = Math.acos( Math.sin(φ1)*Math.sin(φ2) + Math.cos(φ1)*Math.cos(φ2) * Math.cos(Δλ) ) * R;

  const handleReady = (param) => (e) => {
    e.preventDefault();
    const start = document.querySelector("#start");

    navigator.geolocation.getCurrentPosition(
      (data) => {
        console.log(data);
        lat = data.coords.latitude;
        lng = data.coords.longitude;
        console.log(lat);
        console.log(lng);
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
      }
    );

    const startLat = lat;
    const startLong = lng;
    const distance = 0;
    createLocation({
      variables: {
        startLat: startLat,
        startLong: startLong,
        endLat: startLat,
        endLong: startLong,
        distance: distance,
        UserId: param,
      },
      refetchQueries: [
        { query: QUERY_RACE, variables: { id: location.RaceId } },
      ],
      onCompleted: checkReady(),
    });
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
              <div>
                <li key={user.id}>{user.username} </li>
                <li key={user.id}>
                  {user.username}
                  {user.id === location.me ? (
                    <button onClick={handleReady(user.id)}>Ready!</button>
                  ) : null}
                </li>
              </div>
            ))}
        </ol>
        <button>
          <Link to={"/game"}>Start Race</Link>
        </button>
        <br></br>
        <button>
          <Link to={"/setup"}>Edit Race Settings</Link>
        </button>
        <button></button>
        <button>
          <Link to={"/race"}>Start Race</Link>
        </button>
      </div>
    </div>
  );
}
