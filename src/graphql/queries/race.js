import gql from 'graphql-tag';

export const QUERY_RACE = gql`
  query race($id: Int!) {
    race(id: $id) {
      id
      distance
      users {
        id
        username
        position
        location {
          startLat
        }
      }
    }
  }
`;
