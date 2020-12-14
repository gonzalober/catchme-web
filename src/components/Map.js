import React, { Component, useState, useEffect } from "react";
import ProgressBar from "../components/ProgressBar.js";
import { QUERY_RACE } from "../graphql/queries/race";
import { useLocation, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";

function Map() {
  const location = useLocation();
  const history = useHistory();
  const [completedDistances, setCompletedDistances] = useState([]);
  let result;

  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: location.RaceId },
    pollInterval: 2000,
    onCompleted: async () => {
      await setInterval(changeState, 2000);
    },
  });

  function changeState() {
    let users = race.users;
    let i;

    let arr = [];

    for (i = 0; i < users.length; i++) {
      arr.push(
        {
          id: users[i].id,
          distance: users[i].distance,
        }
      )
    }

    setCompletedDistances(arr); 
    console.log("I get here!"); 
  }

  return (
    <div>
      <ul>
      {race &&
        race.users &&
        race.users.map((user) => (
        result = completedDistances.filter(obj => obj.id == user.id)
        <li key={user.id}>
          {user.username}
          {result.distance}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Map;
