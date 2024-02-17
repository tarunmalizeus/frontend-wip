// import React from 'react';
import Jobcard from '../../components/job/Jobcard';
import { useEffect, useState } from "react";
import Loading from '../Loading'


function Jobview() {
    const [enrollments, setEnrollments] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchEnrollments = async () => {
          try {
            // const response = await fetch(`http://localhost:3000/Api/job`);
            // console.log(process.env.REACT_APP_BACKEND)
            const response = await fetch(`${import.meta.env.VITE_BACKEND}/Api/job`);
            if (response.ok) {
              const data = await response.json();
              setEnrollments(data);
              // console.log(data)
              // console.log(enrollments)
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

        return (
          loading || !enrollments ? <Loading /> :(
            <div className="flex flex-col">
                {enrollments.map((job) => (
                    <Jobcard key={job.job_id} job={job} />
                ))}
            </div>)
        );
    }
export default Jobview;

