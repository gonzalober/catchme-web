import React, { Component, useEffect } from "react";
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
    pollInterval: 2000,
  });
  const [createLocation, { loading, error }] = useMutation(CREATE_LOCATION);
  const history = useHistory();

  console.log(race);
  console.log("race:", location.RaceId);
  console.log("user:", location.me);

  //   //here need to fetch users' locations
  //   //and insert them into the mutation
  //   //for example:
  //   //in create user (create/find race pages)-> add me=userid -> history.push
  //   //add conditional thing that checks if race has a start time that is non null
  //     //maybe set up a pollinginterval < second to do it
  //     //when race gets a start time:
  //       //where userid = me, get location of phone
  //       //store it in some variables
  //       //create a location for this user
  //       //wait 3 seconds
  //       //history push to /race, keeping me=userid
  //   //click start race
  //     //race gets a start time
  //   //im using some dummy data for now - users all start from big ben
  //   // const startLat = 51.510357;
  //   // const startLong = -0.116773;
  //   // const distance = 0;
  //   //end of maps data

  //   //olyas idea:
  //   //users click ready
  //     //user gets a location created
  //     //do a setinterval function that checks if all users have a location

  //   //when everybody is ready,
  //   //send a request to start race

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
  let lat;
  let lng;
  const handleReady = (param) => (e) => {
    e.preventDefault();
    var getPosition = () => {
      return new Promise(() => {
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
      });
    };
    getPosition()
      .then(() => {
        console.log(typeof lat);
      })
      .catch((err) => {
        console.error(err.message);
      });

    const startLat = lat;
    console.log(typeof startLat);
    const startLong = lng;
    const distance = 0;
    // createLocation({
    //   variables: {
    //     startLat: startLat,
    //     startLong: startLong,
    //     endLat: startLat,
    //     endLong: startLong,
    //     distance: distance,
    //     UserId: param,
    //   },
    //   refetchQueries: [
    //     { query: QUERY_RACE, variables: { id: location.RaceId } },
    //   ],
    //   onCompleted: checkReady(),
    // });
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
        <button>
          <Link to={"/race"}>Start Race</Link>
        </button>
      </div>
    </div>
  );
}
