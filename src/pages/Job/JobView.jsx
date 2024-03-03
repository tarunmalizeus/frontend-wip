import React from 'react';
import Jobcard from '../../components/Job/Jobcard';
import Loading from '../Loading';
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_JOBS = gql`

query Query {
  jobs {
    name
    internship
    job_id
    to_time
    from_time
    roles {
      role_name
    }
    location_city {
      location_name
    }
  }
}
`;

function Jobview() {
  const { loading, error, data } = useQuery(QUERY_ALL_JOBS);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col">
      {data.jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        data.jobs.map((job) => (
          <Jobcard job={job} />
        ))
      )}
    </div>
  );
}

export default Jobview;
