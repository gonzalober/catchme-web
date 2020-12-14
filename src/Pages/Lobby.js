import React, { Component, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Header from "./Header";
import { QUERY_RACE } from "../graphql/queries/race";
import { CREATE_LOCATION } from "../graphql/mutations/createLocation";
import { UPDATE_RACE_START_TIME } from "../graphql/mutations/updateRaceStartTime";
export default function Lobby() {
  const location = useLocation();
  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: location.RaceId },
    pollInterval: 2000,
  });
  const [createLocation] = useMutation(CREATE_LOCATION);
  const [updateRaceStartTime] = useMutation(UPDATE_RACE_START_TIME);
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
      //give the race a start time
      updateRaceStartTime({
        variables: {
          id: location.RaceId,
          startTime: Date.now(),
        },
        update: (proxy, mutationResult) => {
          //get my location
          for (i = 0; i < race.users.length; i++) {
            if(race.users[i].id === location.me) {
              console.log("DETAILS:", race.users[i].location.endLat,race.users[i].location.endLong,race.users[i].location.distance,race.users[i].location.id)
              history.push({
                pathname: "./race",
                RaceId: race.id,
                me: location.me,
                myEndLat: race.users[i].location.endLat,
                myEndLong: race.users[i].location.endLong,
                myDistance: race.users[i].location.distance,
                myLocId: race.users[i].location.id,
              });
            }
          }
        },
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
