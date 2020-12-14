import React, { Component, useState, useEffect } from "react";
import ProgressBar from "../components/ProgressBar.js";
import { QUERY_RACE } from "../graphql/queries/race";
import { useLocation, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";

function Map() {
  const location = useLocation();
  const history = useHistory();
  const [completed1, setCompleted1] = useState(1);
  const [completed2, setCompleted2] = useState(2);
  const [completed3, setCompleted3] = useState(3);
  const [completed4, setCompleted4] = useState(4);

  useEffect(() => {
    setInterval(() => setCompleted1(Math.floor(Math.random() * 100) + 1), 2000);
    setInterval(() => setCompleted2(Math.floor(Math.random() * 100) + 1), 2000);
    setInterval(() => setCompleted3(Math.floor(Math.random() * 100) + 1), 2000);
    setInterval(() => setCompleted4(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: location.RaceId },
    pollInterval: 2000,
    onCompleted: async () => {
      await query();
    },
  });

  function query() {
    let users = race.users;

    if (users.length === 1) {
      return (
        <div>
          {users[0]}
          <ProgressBar bgcolor={"white"} completed={completed1} />
        </div>
      );
    } else if (users.length === 2) {
      return (
        <div>
          {users[0]}
          <ProgressBar bgcolor={"white"} completed={completed1} />
          {users[1]}
          <ProgressBar bgcolor={"white"} completed={completed2} />
        </div>
      );
    } else if (users.length === 3) {
      return (
        <div>
          {users[0]}
          <ProgressBar bgcolor={"white"} completed={completed1} />
          {users[1]}
          <ProgressBar bgcolor={"white"} completed={completed2} />
          {users[2]}
          <ProgressBar bgcolor={"white"} completed={completed3} />
        </div>
      );
    } else if (users.length == 4) {
      return (
        <div>
          {users[0]}
          <ProgressBar bgcolor={"white"} completed={completed1} />
          {users[1]}
          <ProgressBar bgcolor={"white"} completed={completed2} />
          {users[2]}
          <ProgressBar bgcolor={"white"} completed={completed3} />
          {users[3]}
          <ProgressBar bgcolor={"white"} completed={completed4} />
        </div>
      );
    }
  }
  return (
    <div>
      <p>Distance: {race.distance}</p>
    </div>
  );
}

export default Map;
