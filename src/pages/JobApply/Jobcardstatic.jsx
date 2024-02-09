import { Link } from 'react-router-dom';
import React from 'react';

function Jobcardstatic({ job }) {
  return (
    <div className="w-screem shadow-lg bg-white p-4 m-4">

            <div className='pb-4 border-b-2'>
          <div className='flex flex-row justify-between items-start'>


              <div>
                <div className="text-xl mb-2 text-lightgreen">{job.name}</div>
                <div className=''>
                  <p className='text-sm'>Date & time:</p>
                </div>
                <div className='flex flex-row justify-start'>
                  <div className=' border-r-2'>
                      <p className="pr-1">{job.from_time} to {job.to_time}</p>
                  </div>
                  <div className='pl-1'>
                    <p className="">{job.location_name}</p>
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
                      Apply
              </button>


          </div>
            </div>
            

          <div className='flex flex-col py-3'>

            <p className="text-sm">Job Role:</p>
            <div className='flex flex-row'>
              {job.roles_in_job.map((role, index) => (
                <div  key={index} className="pr-2">
                  <div className>{role}</div>
                </div>
              ))}
            </div>
            <p ><span className="bg-backgroundyellow rounded-l-md rounded-r-md px-2">Internship: {job.internship}</span></p>
        </div>

    </div>
  );
}

export default Jobcardstatic;
