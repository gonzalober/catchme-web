import gql from 'graphql-tag';

export const QUERY_USER = gql`
  query user($id: Int!) {
    user(id: $id) {
      id
      username
      position
      race {
        id
        distance
      }
      location {
        id
        startLat
        startLong
        endLat
        endLong
        distance
      }
      score {
        id
        time
      }
    }
  }
`;