import Jobcardstatic from "./Jobcardstatic"
import { useParams } from "react-router-dom";
import Process from "./Process";
import Apply from "./Apply";
import Role from "./Role";

function Jobdetails() {
  const jobDataArray = [
    {
        "job_id": 0,
        "name": "Software Engineer",
        "from_time": "2023-01-01",
        "to_time": "2023-06-01",
        "location_name": "New York",
        "roles_in_job": "Junior Developer",
        "internship": "No"
    },
    {
        "job_id": 1,
        "name": "Data Analyst",
        "from_time": "2023-02-01",
        "to_time": "2023-07-01",
        "location_name": "San Francisco",
        "roles_in_job": "Data Science Intern",
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
  // console.log(job_id);

    return (
      <>
        <h1>Jobdetails</h1>
        <Jobcardstatic job={jobDataArray[job_id]}/>
        <Process/>
        <Apply/>

        {(jobDataArray[job_id].roles_in_job).map((role,idx) => (
                    <Role key={idx} job={role} />
                ))} 


      </>
    )
  }

export default Jobdetails