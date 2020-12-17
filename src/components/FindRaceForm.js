import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { CREATE_USER } from "../graphql/mutations/createUser";
import { useHistory } from "react-router-dom";
import { QUERY_RACE } from "../graphql/queries/race";
import Buzzer from '../assets/SoundEffects/Buzzer.mp3'
import CLI from '../assets/SoundEffects/buttonClick.mp3'
import UIfx from 'uifx';

export default function FindRace() {
  const [raceId, setRaceId] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [invalidRaceId, setInvalidRaceId] = React.useState("");
  const [createUser, { loadingUser, userError }] = useMutation(CREATE_USER);
  const history = useHistory();
  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: parseInt(raceId) },
  });

  function handleFindRace(event) {
    event.preventDefault();
    if (!race || race.startTime) {
      Wrong.play()
      setInvalidRaceId("Please insert a valid RaceId number");
    } else {
      createUser({
        update: (proxy, mutationResult) => {
          buttonClick.play()
          const userId = mutationResult.data.createUser.id;
          history.push({
            pathname: "./lobby",
            RaceId: parseInt(raceId),
            me: userId,
            isHost: false,
          });
        },
        variables: { username: username, RaceId: parseInt(raceId) },
      });
    }
  }

  const handleRaceIdInput = (event) => {
    setRaceId(event.target.value);
  };

  const handleUsernameInput = (event) => {
    
    setUsername(event.target.value);
  };

  const Wrong = new UIfx( 
    Buzzer,
    {
      volume: 0.8,
      throttleMs: 100
    }
  )

  const buttonClick = new UIfx(
    CLI,
    {
      volume: 0.8,
      throttleMs: 100
    }
  );

  return (
    <div>
      <form onSubmit={handleFindRace}>
        <div onChange={handleRaceIdInput}>
          <p>Enter race id: </p>
          <input type="text" defaultValue="" />
        </div>
        <div onChange={handleUsernameInput}>
          <p>Enter your name: </p>
          <input type="text" defaultValue="" />
        </div>
        <input className="race-submit" type="submit" value="Find Race" />
      </form>
      <p>{invalidRaceId}</p>
    </div>
  );
}
