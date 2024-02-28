import Jobcardstatic from "../../components/job/Jobcardstatic.jsx"
import { useParams } from "react-router-dom";
import Role from "../../components/job/Role.jsx";
import { useState } from "react";
import Processandapply from "../../components/job/Processandapply.jsx";
import { useQuery, gql } from "@apollo/client";
import Loading from '../Loading';

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
  const jobDataArray = [
    {
        "job_id": 0,
        "name": "Software Engineer",
        "from_time": "2023-01-01",
        "to_time": "2023-06-01",
        "location_name": "New York",
        "roles_in_job": ["Associate Product Manager","Data Science Intern"],
        "internship": "No"
    },
    {
        "job_id": 1,
        "name": "Data Analyst",
        "from_time": "2023-02-01",
        "to_time": "2023-07-01",
        "location_name": "San Francisco",
        "roles_in_job": ["Associate Product Manager","Data Science Intern"],
        "internship": "Yes"
    },
    {
        "job_id": 2,
        "name": "Product Manager",
        "from_time": "2023-03-01",
        "to_time": "2023-08-01",
        "location_name": "Boston",
        "roles_in_job": ["Associate Product Manager","Data Science Intern"],
        "internship": "No"
    }
];

  //backend call to get complete job details
  const {job_id}=useParams();
  const { loading, error, data } = useQuery(QUERY_JOBS_BY_ID, {
    variables: { jobId: parseInt(job_id) },
  });
  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;
  // console.log(data.jobById);
    return (
      <div className="space-y-2 m-4">
          <Jobcardstatic job={data} />
          <AccordionItem title="Pre-requisites & Application Process">
            <Processandapply />
          </AccordionItem>
        {/* {(data.jobById.roles_in_job).map((role, idx) => (
          <AccordionItem key={idx} title={role}>
            <Role job={role} />
          </AccordionItem>
        ))} */}
            </div>


    )
  }

export default JobDetails