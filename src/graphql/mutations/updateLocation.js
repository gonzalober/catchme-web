import gql from 'graphql-tag';

export const UPDATE_LOCATION = gql`
mutation updateLocation(
  $id: Int!
  $startLat: Float!
  $startLong: Float!
  $endLat: Float!
  $endLong: Float!
  $distance: Float!
) {
  updateLocation(
    id: $id
    startLat: $startLat
    startLong: $startLong
    endLat: $endLat
    endLong: $endLong
    distance: $distance
  ) {
    id
    startLat
    startLong
    endLat
    endLong
    distance
  }
}
`;