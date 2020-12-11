import gql from 'graphql-tag';

export const GET_USERS = gql`
  query users($first: Int!) {
    users(first: $first) {
      id
      username
    }
  }
`