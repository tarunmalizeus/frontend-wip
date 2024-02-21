import { gql } from '@apollo/client';

export const GET_QUALIFICATIONS = gql`
query Qualifications {
    qualifications {
        qualification_id
        qualification_name
    }
  }
`;