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

  function convertTimestamp(timestamp) {
    var d = new Date(timestamp * 1000),
      yyyy = d.getFullYear(),
      mm = ("0" + (d.getMonth() + 1)).slice(-2),
      dd = ("0" + d.getDate()).slice(-2),
      hh = d.getHours(),
      h = hh,
      min = ("0" + d.getMinutes()).slice(-2),
      ampm = "AM",
      time;
    if (hh > 12) {
      h = hh - 12;
      ampm = "PM";
    } else if (hh === 12) {
      h = 12;
      ampm = "PM";
    } else if (hh == 0) {
      h = 12;
    }
    time = yyyy + "-" + mm + "-" + dd + ", " + h + ":" + min + " " + ampm;
    return time;
  }

  return (
    <div className="main-content">
      <div className="lobby-page">
        <h1>Race Complete!</h1>
        <p>Race code: {race?.id}</p>
        <p>Distance completed: {race && race.distance}m</p>
        <p>Start Time: {race && convertTimestamp(race.startTime)}</p>
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
