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
            <div className='space-y-4'>
        <div className='bg-white shadow-md p-4'>
          <div className='border-b-2'>
            <h2 className="text-gray-500 mb-2">Gross Compensation Package:</h2>
                  <ul className="list-disc list-inside mb-6 space-y-2 list-dash text-xs">
            <li>Rs {data.roleUnique.package_rupees} lpa</li>
                  </ul>
          </div>
      
      <div className='border-b-2 pt-4'>
        <h3 className="text-gray-500 mb-4">Role Description:</h3>
        <ul className="list-disc list-inside mb-6 space-y-2 list-dash text-xs">
            <li>{data.roleUnique.description}</li>
        </ul>
      </div>
      
      <div className='border-b-2 pt-4'>
        <h3 className="text-gray-500 mb-4">Requirements:</h3>
        <ul className="list-disc list-inside mb-6 space-y-2 list-dash text-xs">
            <li>{data.roleUnique.requirements}</li>
        </ul>
      </div>
      
        </div>
        </div>

        </>
    );
}

export default Role;

