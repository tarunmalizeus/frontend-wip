import { gql } from '@apollo/client';

export const GET_QUALIFICATIONS = gql`
  query GetQualifications {
    qualifications {
      id
      name
    }
  }
`;