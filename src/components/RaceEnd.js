import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useLocation, useHistory } from "react-router-dom";
import { QUERY_RACE } from "../graphql/queries/race";
import { CREATE_SCORE } from "../graphql/mutations/createScore";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const border = {
  borderColor: 'white',
  marginBottom: '20px',
  fontSize: 'small'
}

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
      <div className="lobby-page">
      <h1>Race Complete!</h1>
      <Table>
      <Thead>
        <Tr >
          <Th>Distance:</Th>
          <Th>Time:</Th>
          <Th>Score:</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr style={border}>
          <Td>{race && race.distance}m</Td>
          <Td>{race && maxScore()}</Td>
          <Td>{race && 
                    race.users.find((user) => user.id === location.me).score.time}</Td>
        </Tr>
      </Tbody>
    </Table>
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
  );
}
