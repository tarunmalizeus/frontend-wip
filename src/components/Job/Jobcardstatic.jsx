import React from 'react';
import { useNavigate , Navigate } from 'react-router-dom';
import { useJobApplyData } from '../../utils/JobApplyContext';
import { useMutation, gql } from '@apollo/client';

const APPLY_APPLICATION = gql`
mutation Mutation($input: CreateApplicationInput!) {
  createApplication(input: $input) {
    slot_id
    venu_id
    job_id
    application_id
    exact_date
  }
}
`;

function Jobcardstatic({job}) {
  const navigate = useNavigate();
  const {jobApplyData, updateJobApplyData} = useJobApplyData();
  const [createApplicationMutation, { data, loading, error }] = useMutation(APPLY_APPLICATION);
  
  const apply = async () => {
    //do the authentication
      const user_id=115;

      try{
        const result= await createApplicationMutation({
          variables: {
            input: {
              resumeFile: jobApplyData.resumeFile,
              user_id: user_id,
              job_id: job.jobById.job_id,
              preference: jobApplyData.preferences,
              slot: jobApplyData.timeSlot,
            },
          },
        });

        updateJobApplyData({ 
          venu_id: result.data.createApplication.venu_id,
          exact_date: result.data.createApplication.exact_date ,
          job_id: job.jobById.job_id,
        });



        window.alert("Applied Successfully");
        navigate('/jobs/confirmation');
      }
      catch(e){
        window.alert(e.message);
      }
  }


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
                    <p className="">{job.jobById.location_city.location_name}</p>
                  </div>
                </div>
              </div>


              <button


                      onClick={apply}
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
