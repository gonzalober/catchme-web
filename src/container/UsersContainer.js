import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../graphql/get-users';
import { User } from '../Pages/Users';

export function UsersContainer() {
  const { data: { users = [] } = {} } = useQuery(GET_USERS, {
    variables: { first: 5 },
  });

  return (
    <div>
      {users && users.map(user => <User key={user.id} user={user} />)}
      {console.log(users)}
    </div>
  )
}