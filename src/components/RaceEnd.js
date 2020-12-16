import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Link, useLocation, useHistory } from "react-router-dom";
import { QUERY_RACE } from "../graphql/queries/race";
import Header2 from "../components/no-race-header";
import { CREATE_SCORE } from "../graphql/mutations/createScore";
import Footer from "../components/Footer";

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

  return (
    <div className="main-content">
      <Header2 />
      <div className="lobby-page">
        <h1>Race Complete!</h1>
        <p>Race code: {race?.id}</p>
        <p>Distance completed: {race && race.distance}m</p>
        <p>Start Time: {race && race.startTime}</p>
        <p>
          End Time:
          {race &&
            race.users.find((user) => user.id === location.me).score.time}
        </p>
        <p>Time of the Race:{race && maxScore()}</p>
        <p>Score: {}</p>
        <button
          onClick={() => {
            history.push({
              pathname: "/race-end",
              RaceId: race.id,
              me: location.me,
            });
          }}
        >
          Submit Time
        </button>
      </div>
    </div>
  );
}
