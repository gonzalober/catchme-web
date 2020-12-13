import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_RACE } from "../graphql/mutations/createRace";
import { CREATE_USER } from "../graphql/mutations/createUser";
import { useHistory } from "react-router-dom";

export default function CreateRaceForm() {
  const [distance, setDistance] = React.useState("500");
  const [username, setUsername] = React.useState("");
  const [createRace, { loading, error }] = useMutation(CREATE_RACE);
  const [createUser, { loadingUser, userError }] = useMutation(CREATE_USER);
  const history = useHistory();

  function handleCreateRace(event) {
    event.preventDefault();
    createRace({
      update: (proxy, mutationResult) => {
        // dont delete this comment!
        // console.log('raceMutationResult: ', mutationResult);
        const raceId = mutationResult.data.createRace.id;

        createUser({
          update: (proxy, mutationResult) => {
            const userId = mutationResult.data.createUser.id;
            history.push({
              pathname: "./lobby",
              RaceId: raceId,
              me: userId,
            });
          },
          variables: { username: username, RaceId: raceId },
        });
      },
      variables: { distance: parseInt(distance) },
    });
  }

  const handleClick = () => {
    history.push("./Lobby");
  };

  const handleRadioChange = (event) => {
    setDistance(event.target.value);
  };

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleCreateRace} className="form">
        <div onChange={handleRadioChange}>
          <label className="radio">
            <input type="radio" value="500" name="distance" />
            <span> 500m</span>
          </label>
          <label className="radio">
            <input type="radio" value="1000" name="distance" />
            <span> 1000m</span>
          </label>
          <label className="radio">
            <input type="radio" value="1500" name="distance" />
            <span> 1500m</span>
          </label>
          <label className="radio">
            <input type="radio" value="2000" name="distance" />
            <span> 2000m</span>
          </label>
        </div>
        <div onChange={handleNameChange} className="form-input">
          <input type="text" defaultValue="" placeholder="User Name:" />
        </div>
        <input className="form-submit" type="submit" value="Create Race" />
      </form>
    </div>
  );
}
