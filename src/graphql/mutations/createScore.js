import gql from "graphql-tag";

export const CREATE_SCORE = gql`
  mutation createScore($time: Float!, $UserId: Int!) {
    createScore(time: $time, UserId: $UserId) {
      id
      time
    }
  }
`;
