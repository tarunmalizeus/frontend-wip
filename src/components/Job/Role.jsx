import React from 'react';
import { useQuery, gql } from "@apollo/client";
import Loading from '../../pages/Loading';

const QUERY_ROLE = gql`
query Query($job_id: Int!, $role_id: Int!) {
    roleUnique(job_id: $job_id, role_id: $role_id) {
      description
      package_rupees
      requirements
    }
  }
`;



function Role({ role }) {
    const { role_name, job_id, role_id } = role;
    const { loading, error, data } = useQuery(QUERY_ROLE, {
        variables: { job_id, role_id }
    });
    if (loading) return <Loading />;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <>
            <p>{data.roleUnique.package_rupees}</p>
            <p>{data.roleUnique.description}</p>
            <p>{data.roleUnique.requirements}</p>
            <p>{role_name}</p>
        </>
    );
}

export default Role;

