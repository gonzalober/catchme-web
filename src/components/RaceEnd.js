import React from "react";
import { CREATE_SCORE } from "../graphql/mutations/createScore";
import { useLocation, useHistory } from "react-router-dom";

export default function RaceEnd() {
  const location = useLocation();
  const [createScore] = useMutation(CREATE_SCORE);
  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: location.RaceId },
    pollInterval: 2000,
  });
  let endTime;
  let startTime;
  const handleScore = () => {
    createScore({
      variables: {
        time: endTime,
        user: userId,
      },
    });
  };
  const timeOfTheRace = () => {
    return race.endTime - race.startTime;
  };

  return (
    <div className="main-content">
      <Header2 />
      <div className="lobby-page">
        <h1>Race Complete!</h1>
        <p>Race code: {race && race.id}</p>
        <p>Distance completed: {race && race.distance}m</p>
        <p>Start Time: {race && race.startTime}</p>
        <p>End Time: {endTime}</p>
        <p>Time:{timeOfTheRace()}</p>
        <p>Score: {handleScore}</p>
        <button>Submit Time</button>
      </div>
      <Footer />
    </div>
  );
}
