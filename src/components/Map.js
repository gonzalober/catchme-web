import React, { Component, useState, useEffect } from "react";
import ProgressBar from "../components/ProgressBar.js";
import { QUERY_RACE } from "../graphql/queries/race";
import { useLocation, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";

function Map() {
  const location = useLocation();
  const history = useHistory();
  const [completedDistances, setCompletedDistances] = React.useState([]);
  // let result;

  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: location.RaceId },
    pollInterval: 2000,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    onCompleted: async () => {
      // console.log("users: ", users);
      await changeState();
    },
  });

  function changeState() {
    let users = race.users;
    let i;

    let arr = [];

    for (i = 0; i < users.length; i++) {
      // console.log("user:", users[i]);
      // console.log("distance of a user:", users[i].distance);
      arr.push({
        id: users[i].id,
        username: users[i].username,
        distance: users[i].location.distance,
      });
      // arr.push(
      //   {
      //     id: users[i].id,
      //     distance: users[i].distance,
      //   }
      // )
    }

    console.log(arr);
    // arr = [];

    setCompletedDistances(arr);
    arr = [];
    // arr = arr.concat();
    // console.log("I get here!");
    // console.log("also users:", race.users);
    // console.log("comp dist:", completedDistances);
  }

  return (
    <div>


        {completedDistances.map((obj) => (
          <div key={obj.id}>
            <p>{obj.username}</p>
            <p>{obj.distance.toFixed(2)}m</p>
            <ProgressBar completed={obj.distance} raceDist={race.distance} />   
          </div>         
        ))}

    </div>
  );
}

export default Map;
