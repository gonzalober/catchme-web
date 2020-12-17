import React from "react";
import ProgressBar from "../components/ProgressBar.js";
import { QUERY_RACE } from "../graphql/queries/race";
import { useLocation, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

function Map() {
  const location = useLocation();
  const history = useHistory();
  const [completedDistances, setCompletedDistances] = React.useState([]);
  const [youveFinished, setYouveFinished] = React.useState("");

  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: location.RaceId },
    pollInterval: 2000,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    onCompleted: async () => {
      await changeState();
    },
  });

  function changeState() {
    let users = race.users;
    let i;
    const currentUser = race.users.find((user) => user.id === location.me);
    let arr = [];

    for (i = 0; i < users.length; i++) {
      arr.push({
        id: users[i].id,
        username: users[i].username,
        distance: users[i].location.distance,
      });
    }

    if (currentUser && currentUser.score) {
      setYouveFinished("You have finished the race!");
    }

    if (users.every((user) => user.score)) {
      history.push({
        pathname: "/race-end",
        RaceId: race.id,
        me: location.me,
      });
    }

    setCompletedDistances(arr);
    arr = [];
  }

  return (
    <div>
      {completedDistances.map((obj) => (
        <div key={obj.id}>
          <p>{obj.username}</p>
          <p>{obj.distance.toFixed(2)}m</p>
          <ProgressBar completed={obj.distance} raceDist={race.distance} />
          {obj.id === location.me ? (
                  <p className="finished">{youveFinished}</p>
                ) : null}
        </div>
      ))}
    </div>
  );
}

export default Map;
