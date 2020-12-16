import gql from "graphql-tag";

export const QUERY_RACE = gql`
  query race($id: Int!) {
    race(id: $id) {
      id
      distance
      startTime
      endTime
      users {
        id
        username
        position
        location {
          id
          startLat
          startLong
          endLat
          endLong
          distance
        }
        score {
          time
        }
      }
    }
  }
`;
