import React from 'react';
import Jobcard from '../../components/job/Jobcard';

function Jobview() {
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

        return (
            <div className="flex flex-col">
                {jobDataArray.map((job) => (
                    <Jobcard key={job.job_id} job={job} />
                ))}
            </div>
        );
    }
export default Jobview;

