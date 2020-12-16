import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation createUser($username: String!, $RaceId: Int!) {
    createUser(username: $username, RaceId: $RaceId) {
      id
      username
    }
  }
`;
