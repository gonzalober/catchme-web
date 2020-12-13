import gql from 'graphql-tag';

export const UPDATE_RACE_START_TIME = gql`
  mutation updateRaceStartTime($id: Int!, $startTime: Float!) {
    updateRaceStartTime(id: $id, startTime: $startTime) {
      id
      startTime
    }
  }
`;