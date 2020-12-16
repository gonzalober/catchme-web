import gql from 'graphql-tag';

export const SCORES_QUERY = gql`
  query scores {
    scores {
      id
      time
      user {
        id
        username
        race {
          distance
        }
      }
    }
  }
`;