import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { RACES_QUERY } from '../graphql/races';
import { Race } from '../components/Race';

export function RaceContainer() {
  const { data: { races = [] } = {} } = useQuery(RACES_QUERY);

  return (
    <div className="races">
      {races && races.map(race => 
        <Race key={race.id} race={race}/>
      )}
    </div>
  )
}
