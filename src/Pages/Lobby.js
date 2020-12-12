import React, { Component, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import Header from './Header';
import { QUERY_RACE } from '../graphql/queries/race';

export default function Lobby() {
  const location = useLocation();
  // const [queryRace, {loading, error}] = useQuery(QUERY_RACE);
  const { data: { race } = {} } = useQuery(QUERY_RACE, {
    variables: { id: location.RaceId },
    pollInterval: 5000,
  });
  console.log(race);
  console.log(location.RaceId);

  return (
    <div className="main-content">
      <Header/>
      <div className="lobby-page">
        <h1>Lobby</h1>
          <p>Code: {race && race.id}</p>
          <p>Distance: {race && race.distance}m</p>
          <p>Participants:</p>
          <ol>
            {race && race.users && race.users.map(user => 
              <li key={ user.id } >{user.username}</li>
            )}
          </ol>
          <button><Link to={"/game"}>Start Race</Link></button><br></br>
          <button><Link to={"/setup"}>Edit Race Settings</Link></button>  
      </div>  
    </div>
  )
}
