import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER } from '../graphql/mutations/createUser';
import { useHistory } from "react-router-dom";
import { QUERY_RACE } from '../graphql/queries/race';

export default function FindRace() {
  const [raceId, setRaceId] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [createUser, { loadingUser, userError }] = useMutation(CREATE_USER);
  const history = useHistory();

  function handleFindRace(event) {
    event.preventDefault();
    createUser({
      update: (proxy, mutationResult) => {
        const userId = mutationResult.data.createUser.id;
        history.push({
          pathname: './lobby',
          RaceId: parseInt(raceId),
          me: userId,
          isHost: false,
        })
      },
      variables: { username: username, RaceId: parseInt(raceId) }
    });



  }

  const handleRaceIdInput = (event) => {
    setRaceId(event.target.value);
  };

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };

  return (

    <form onSubmit={handleFindRace}>
      <div onChange={handleRaceIdInput}>
        <p>Enter race id: </p>
        <input type="text" defaultValue=""/>
      </div>
      <div onChange={handleUsernameInput}>
        <p>Enter your name: </p>
        <input type="text" defaultValue=""/>
      </div>
      <input type="submit" value="Find Race"/>
    </form>
  );
}
