import gql from 'graphql-tag';

export const RACES_QUERY = gql`
  query races {
    races {
      id
      distance
      users {
        id
        username
        position
      }
    }
  }
`;