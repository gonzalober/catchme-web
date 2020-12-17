import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { useQuery } from "@apollo/react-hooks";
import { SCORES_QUERY } from "../graphql/queries/scores";






export default function LeaderTable() {
  const border = {
    borderColor: 'white',
    marginBottom: '20px'
  }
  let top10;

  const { data: { scores } = {} } = useQuery(SCORES_QUERY);

  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 10),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
  
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return minutes + ":" + seconds + "." + milliseconds;
  }

  const sortArray = () => {
    if ( scores ) {
      console.log(scores);
      const sortedScores = scores.sort((a,b) => (a.time < b.time) ? -1 : 1 );
      console.log("sorted:", sortedScores)
      top10 = sortedScores.slice(0, 10);
      console.log("top10: ", top10);
      return (
        top10.map((score) => (
          <Tr style={border} key={score.id}>
            <Td>{top10.indexOf(score) + 1}</Td>
            <Td>{score.user.username}</Td>
            <Td>{msToTime(score.time)}</Td>
          </Tr>
        ))
      )   
    }
  }
  

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Rank</Th>
          <Th>User</Th>
          <Th>Time</Th>
        </Tr>
      </Thead>
      <Tbody>
      {sortArray()}
      </Tbody>
    </Table>
  );
}
