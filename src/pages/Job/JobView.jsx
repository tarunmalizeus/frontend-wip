import React from 'react';
import Jobcard from '../../components/job/Jobcard';
import { useEffect, useState } from "react";


function Jobview() {
    const [enrollments, setEnrollments] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchEnrollments = async () => {
          try {
            const response = await fetch(`http://localhost:3000/Api/job`);
            // const response = await fetch(`${process.env.REACT_APP_BACKEND}/Api/job`);
            console.log(response)
            if (response.ok) {
              const data = await response.json();
              setEnrollments(data);
              console.log(data)
            //   console.log(enrollments)
            } else {
              console.error('Failed to fetch enrollments');
            }
          } catch (error) {
            console.error('Error during fetch:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchEnrollments();
      }, []);

      // console.log(enrollments)

    // = [
    //     {
    //         "job_id": 0,
    //         "name": "Software Engineer",
    //         "from_time": "2023-01-01",
    //         "to_time": "2023-06-01",
    //         "location_name": "New York",
    //         "roles_in_job": ["Associate Product Manager","Data Science Intern"],
    //         "internship": "No"
    //     },
    //     {
    //         "job_id": 1,
    //         "name": "Data Analyst",
    //         "from_time": "2023-02-01",
    //         "to_time": "2023-07-01",
    //         "location_name": "San Francisco",
    //         "roles_in_job": ["Associate Product Manager","Data Science Intern"],
    //         "internship": "Yes"
    //     },
    //     {
    //         "job_id": 2,
    //         "name": "Product Manager",
    //         "from_time": "2023-03-01",
    //         "to_time": "2023-08-01",
    //         "location_name": "Boston",
    //         "roles_in_job": ["Associate Product Manager","Data Science Intern"],
    //         "internship": "No"
    //     }
    // ];

        return (
            
            <div className="flex flex-col">
                {/* {enrollments.map((job) => (
                    <Jobcard key={job.job_id} job={job} />
                ))} */}
            </div>
        );
    }
export default Jobview;

