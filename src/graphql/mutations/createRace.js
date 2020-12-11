import gql from 'graphql-tag';

export const CREATE_RACE = gql`
  mutation createRace($distance: Int!) {
    createRace(distance: $distance) {
      id
      distance
    }
  }
`;