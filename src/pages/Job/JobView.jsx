// import React from 'react';
import Jobcard from '../../components/job/Jobcard';
import {useState } from "react";
import Loading from '../Loading'
import { useQuery,gql } from "@apollo/client";

      const QUERY_ALL_JOBS = gql`
      query Query {
        jobs {
          name
          internship
          job_id
          location_id
          to_time
          from_time
        }
      }
      `;

function Jobview() {
  // const [enrollments, setEnrollments] = useState([]);
  const {data} = useQuery(QUERY_ALL_JOBS);
  if(data){
    console.log(data.jobs)
  }

    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     const fetchEnrollments = async () => {
    //       try {
    //         // const response = await fetch(`http://localhost:3000/Api/job`);
    //         // console.log(process.env.REACT_APP_BACKEND)
    //         const response = await fetch(`${import.meta.env.VITE_BACKEND}/Api/job`);
    //         if (response.ok) {
    //           const data = await response.json();
    //           setEnrollments(data);
    //           // console.log(data)
    //           // console.log(enrollments)
    //         } else {
    //           console.error('Failed to fetch enrollments');
    //         }
    //       } catch (error) {
    //         console.error('Error during fetch:', error);
    //       } finally {
    //         setLoading(false);
    //       }
    //     };
    
    //     fetchEnrollments();
    //   }, []);

      // console.log(enrollments)
      // console.log(data.jobs)
        return (
          <div></div>
            // !data.jobs ? <Loading /> :(
            // <div className="flex flex-col">
            //     {data.jobs.map((dataObj) => (
            //         <Jobcard key={dataObj.job_id} dataObj={job} />
            //     ))}
            // </div>)
        );
    }
export default Jobview;

