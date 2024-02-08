import React from 'react';
import Jobcard from '../components/Jobcard';

function Jobs() {
  const jobDataArray = [
    {
      "name": "Software Engineer",
      "from_time": "2023-01-01",
      "to_time": "2023-06-01",
      "location_name": "New York",
      "roles_in_job": "Junior Developer",
      "internship": "No"
    },
    {
      "name": "Data Analyst",
      "from_time": "2023-02-01",
      "to_time": "2023-07-01",
      "location_name": "San Francisco",
      "roles_in_job": "Data Science Intern",
      "internship": "Yes"
    },
    {
      "name": "Product Manager",
      "from_time": "2023-03-01",
      "to_time": "2023-08-01",
      "location_name": "Boston",
      "roles_in_job": "Associate Product Manager",
      "internship": "No"
    }
  ];

  return (
    <div className="flex flex-col">
      {jobDataArray.map((job, index) => (
        <Jobcard key={index} job={job} />
      ))}
    </div>
  );
}

export default Jobs;
