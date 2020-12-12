import gql from 'graphql-tag';

export const CREATE_LOCATION = gql`
mutation createLocation(
  $startLat: Float!
  $startLong: Float!
  $endLat: Float!
  $endLong: Float!
  $distance: Float!
  $UserId: Int!
) {
  createLocation(
    startLat: $startLat
    startLong: $startLong
    endLat: $endLat
    endLong: $endLong
    distance: $distance
    UserId: $UserId
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