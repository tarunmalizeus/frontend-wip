import { gql } from '@apollo/client';

export const GET_QUALIFICATIONS = gql`
query Qualifications {
    qualifications {
        qualification_id
        qualification_name
    }
  }
`;

export const GET_COLLEGES = gql`
query Colleges {
    colleges {
        college_id
        college_name
    }
  }
`;

export const GET_STREAM = gql`
query Streams {
    streams {
        stream_id
        stream_name
    }
  }
`;