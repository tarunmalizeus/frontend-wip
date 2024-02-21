import React from 'react';
import { Link } from 'react-router-dom';

function Jobcard({ job }) {
  const {job_id ,name, from_time, to_time, location_city, internship, roles} = job;

  console.log(job)
  return (
    <div className="w-screem shadow-lg bg-white p-4 m-4">
          <div className='pb-4 border-b-2'>
            <div className="text-xl mb-2 text-lightgreen">{name}</div>
            <div className=''>
              <p className='text-sm'>Date & time:</p>
            </div>
            <div className='flex flex-row justify-start'>
              <div className=' border-r-2'>
                  <p className="pr-1">{from_time} to {to_time}</p>
              </div>
              <div className='pl-1'>
                <p className="">{location_city.location_name}</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col py-3'>

            <p className="text-sm">Job Role:</p>
            <div className='flex flex-row'>
              {/* {console.log(roles_in_job)} */}
              {roles.map((role, index) => (
                <div  key={index} className="pr-2">
                  <div className>{role.role_name}</div>
                </div>
              ))}
            </div>
            <p ><span className="bg-backgroundyellow rounded-l-md rounded-r-md px-2">Internship: {internship}</span></p>
        </div>
          
          <div className='flex flex-row justify-center'>
            <button>
              <Link to={"/jobs/"+job_id}>
                <div
                  className="bg-lightgreen py-1 px-4 "
                >
                  VIEW MORE DETAILS
                </div>
              </Link>
            </button>
          </div> 

    </div>
  );
}

export default Jobcard;
