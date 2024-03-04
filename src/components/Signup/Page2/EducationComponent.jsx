import React from 'react';
import { useSignupData } from '../../../utils/SignupContext';
import { useSignupErrorContext } from '../../../utils/SignupErrorContext';

import Qualification from './Qualification';
import College from './College';
import Stream from './Stream';


function EducationComponent() {
  const { signupData, updateSignupData } = useSignupData();
  const { collegeLocationError, setCollegeLocationError } = useSignupErrorContext();

  const handleChange = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    if(name === "collegeLocation"){
      const nameRegex = /^[a-zA-Z]+$/;
      if(!nameRegex.test(value)){
        setCollegeLocationError("Please enter a valid location.");
      } else {
        setCollegeLocationError("");
      }
    }  

    updateSignupData({ [e.target.name]: e.target.value });
  };

  return (

    <form className='flex flex-col p-8 bg-white gap-8'>

      <div className='flex flex-col'>
        <label className="text-gray-500 text-sm ">
          Aggregate Percentage*
        </label>
        <input
          className='my-3 border-b-2 w-1/4'
          type="number"
          name="percentage"
          value={signupData.percentage}
          onChange={handleChange}
          placeholder="Aggregate Percentage"
        />
      </div>


      <div className='flex flex-col gap-2'>
        <label className="text-gray-500 text-sm ">
          Year Of Passing*
        </label>
        <select
          className='my-1 border-b-2 w-1/4'
          name="yearOfPassing" value={signupData.yearOfPassing} onChange={handleChange}>
          <option value="2020">2020</option>
        </select>
      </div>


      <div className='flex flex-row justify-between '>
        <div className='flex flex-col w-1/3 gap-8'>

      <Qualification/>
      <College/>
        </div>

        <div className='flex flex-col w-1/3 gap-8'>

          <Stream/>

          <label className='my-3 border-b-2 flex flex-col gap-2'>
            <div className="text-gray-500 text-sm ">
              If Others, Please Enter Your College Name

            </div>
            <input
              type="text"
              name="otherCollege"
              value={signupData.otherCollege}
              onChange={handleChange}

            />
          </label>

        </div>
      </div>




      <div className='flex flex-col'>
        <label className='my-3 border-b-2 w-1/4'>
          <div className="text-gray-500 text-sm ">
            Where Is Your College Located?*
          </div>
          <input
            type="text"
            name="collegeLocation"
            value={signupData.collegeLocation}
            onChange={handleChange}/>
        </label>
        {collegeLocationError && <p className="text-red-500">{collegeLocationError}</p>}
      </div>



    </form>

  );
}

export default EducationComponent;
