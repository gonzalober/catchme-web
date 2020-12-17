import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useLocation, useHistory } from "react-router-dom";
import { QUERY_RACE } from "../graphql/queries/race";

export default function RaceEnd() {
  const location = useLocation();
  const history = useHistory();
  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: location.RaceId },
  });

  const maxScore = () => {
    const maximum = Math.max.apply(
      Math,
      race.users.map((o) => o.score.time)
    );
    return maximum;
  };

  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 10),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds + ":" + milliseconds;
  }

  return (
    <div className="main-content">
      <div className="lobby-page">
        <h1>Race Complete!</h1>
        <p>Race code: {race?.id}</p>
        <p>Distance completed: {race && race.distance}m</p>
        <p>Time of the Race: {race && msToTime(maxScore())}</p>
        <div>
          Score:{" "}
          {race.users.map((obj) => (
            <div key={obj.id}>
              <p>
                {obj.username} = {parseInt(obj.score.time.toFixed(2))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
