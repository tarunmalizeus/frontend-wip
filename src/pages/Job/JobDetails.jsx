import Jobcardstatic from "../../components/job/Jobcardstatic.jsx"
import { useParams } from "react-router-dom";
import Role from "../../components/job/Role.jsx";
import { useState } from "react";
import Processandapply from "../../components/job/Processandapply.jsx";
import { useQuery, gql } from "@apollo/client";
import Loading from '../Loading';
import { useLocation } from 'react-router-dom';

const QUERY_JOBS_BY_ID = gql`
query JobById($jobId: Int!) {
  jobById(job_id: $jobId) {
    job_id
    internship
    from_time
    to_time
    location_city {
      location_name
    }
    name
    roles {
      role_name
      role_id
      job_id
    }
  }
}
`;

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-md shadow-md">
      <button
        className="flex justify-between items-center w-full px-4 py-2 bg-accordianblue hover:bg-gray-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{title}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          &#9660;
        </span>
      </button>
      {isOpen && (
        <div className=" border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}




function JobDetails() {
  //failue
  // const location = useLocation();
  // const data1 = location.state.data;

  const {job_id}=useParams();
  const { loading, error, data } = useQuery(QUERY_JOBS_BY_ID, {
    variables: { jobId: parseInt(job_id) },
  });
  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;
    return (
      <div className="space-y-2 m-4">
          <Jobcardstatic job={data} />
          <AccordionItem title="Pre-requisites & Application Process">
            {/* {console.log(data.jobById.roles)} */}
            <Processandapply jobIdAndPref={{job_id:data.jobById.job_id, roles:data.jobById.roles}}/>
          </AccordionItem>
        {(data.jobById.roles).map((role, idx) => (
          <AccordionItem key={role.role_id} title={role.role_name}>
            <Role role={role} />
          </AccordionItem>
        ))}
            </div>


    )
  }

export default JobDetails