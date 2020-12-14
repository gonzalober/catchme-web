import gql from 'graphql-tag';

export const CREATE_RACE = gql`
  mutation createRace($distance: Float!) {
    createRace(distance: $distance) {
      id
      distance
    }
  }
`;