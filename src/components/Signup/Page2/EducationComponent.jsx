import React from 'react';
import { useSignupData } from '../../../utils/SignupContext';

import Qualification from './Qualification';
import College from './College';
import Stream from './Stream';


function EducationComponent() {
  const { signupData, updateSignupData } = useSignupData();


  const handleChange = (e) => {
    updateSignupData({ [e.target.name]: e.target.value });
  };

  return (

    <form className='flex flex-col p-4 bg-white gap-8'>

      

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


      <div className='flex flex-col'>
        <label className="text-gray-500 text-sm ">
          Year Of Passing
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

          <label className='my-3 border-b-2'>
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
      </div>



    </form>

  );
}

export default EducationComponent;
