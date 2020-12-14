import gql from 'graphql-tag';

export const QUERY_LOCATION = gql`
query location($id: Int!) {
  location(id: $id) {
    id
    startLat
    startLong
    endLat
    endLong
    distance
  }
}
`;