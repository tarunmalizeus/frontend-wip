import { Link } from 'react-router-dom';
import React from 'react';

function Jobcardstatic({job}) {
  return (
    <div className="w-screem shadow-lg bg-white p-4 ">


            <div className='pb-4 border-b-2'>
          <div className='flex flex-row justify-between items-start'>


              <div>
                <div className="text-xl mb-2 text-lightgreen">{job.jobById.name}</div>
                <div className=''>
                  <p className='text-sm'>Date & time:</p>
                </div>
                <div className='flex flex-row justify-start'>
                  <div className=' border-r-2'>
                      <p className="pr-1">{job.jobById.from_time} to {job.jobById.to_time}</p>
                  </div>
                  <div className='pl-1'>
                    <p className="">{job.jobById.location_name}</p>
                  </div>
                </div>
              </div>


              <button

                      className="bg-lightgreen  px-4 py-1"
                      type="submit"
                      name="aaply"
                      id="aaply"
                      value="Apply"
                      >
                      <Link to="/jobs/confirmation">Apply</Link>
              </button>


          </div>
            </div>
            
          <div className='flex flex-col py-3'>

            <p className="text-sm">Job Role:</p>
            <div className='flex flex-row'>
              {job.jobById.roles.map((role, index) => (
                <div  key={index} className="pr-2">
                  <div className>{role.role_name}</div>
                </div>
              ))}
            </div>
            <p ><span className="bg-backgroundyellow rounded-l-md rounded-r-md px-2">Internship: {job.jobById.internship}</span></p>
        </div>

    </div>
  );
}

export default Jobcardstatic;
