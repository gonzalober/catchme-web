import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { CREATE_SCORE } from "../graphql/mutations/createScore";
import { QUERY_RACE } from "../graphql/queries/race";
import Footer from "../components/Footer";

export default function RaceEnd() {
  console.log("-------");
  const location = useLocation();
  const [createScore] = useMutation(CREATE_SCORE);
  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: location.RaceId },
    pollInterval: 2000,
  });
  let userEndTime;
  let startTime;
  //CREATE SCORE
  const handleScore = () => {
    createScore({
      variables: {
        time: userEndTime,
        user: userId,
      },
    });
  };

  //TIME OF THE RACE
  const TotalTimeRace = () => {
    return race.endTime - race.startTime;
  };

  return (
    <div className="main-content">
      <div className="lobby-page">
        <h1>Race Complete!</h1>
        <p>Race code: {race && race.id}</p>
        <p>Distance completed: {race && race.distance}m</p>
        <p>Start Time: {race && race.startTime}</p>
        <p>End Time: {endTime}</p>
        <p>Time:{TotalTimeRace()}</p>
        <p>Score: {handleScore}</p>
        <button>Submit Time</button>
      </div>
    </div>
  );
}
