import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Link, useLocation, useHistory } from "react-router-dom";
import { QUERY_RACE } from "../graphql/queries/race";
import { CREATE_SCORE } from "../graphql/mutations/createScore";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const border = {
  borderColor: 'white',
  marginBottom: '20px',
  fontSize: 'x-large',
  fontFamily: 'Roboto'
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

  return (
      <div className="lobby-page">
      <Table>
      <Thead>
        <Tr >
          <Th >Race Code:</Th>
          <Th>Distance:</Th>
          <Th>Start Time:</Th>
          <Th>Time:</Th>
          <Th>Score:</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr style={border}>
          <Td>{race?.id}</Td>
          <Td>{race && race.distance}m</Td>
          <Td>{race && race.startTime}</Td>
          <Td>{race && maxScore()}</Td>
          <Td>{race && 
                    race.users.find((user) => user.id === location.me).score.time}</Td>
        </Tr>
      </Tbody>
    </Table>
     
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
  );
}
