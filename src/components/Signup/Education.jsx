import React from 'react';
import { useSignupData } from '../../utils/SignupContext';

function Education() {
  const { signupData, updateSignupData } = useSignupData();

  const handleChange = (e) => {
    updateSignupData({ [e.target.name]: e.target.value });
  };

  return (

    <form className='flex flex-col p-4 bg-white'>

      <label>
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

          <label>
            Year Of Passing
          </label>
            <select
            className='my-1 border-b-2 w-1/4'
            name="yearOfPassing" value={signupData.yearOfPassing} onChange={handleChange}>
              <option value="2020">2020</option>
            </select>


            <div className='flex flex-row justify-between'>
              <div className='flex flex-col w-1/3'>
                        <label className='my-3 border-b-2 '>
                          <div>
                            Qualification*
                          </div>
              <select className='w-full' name="qualification" value={signupData.qualification} onChange={handleChange}>
                <option value="B.Tech">Bachelor in Technology (B.Tech)</option>

              </select>
                        </label>



                        <label className='my-3 border-b-2'>
                          <div>
                            College*
                          </div>
              <select className='w-full' name="college" value={signupData.college} onChange={handleChange}>
                <option value="PIT">Pune Institute of Technology (PIT)</option>
              </select>
                        </label>
                      </div>
              
              
              
                      <div className='flex flex-col w-1/3'>
              <label className='my-3 border-b-2'>
                <div>
              Stream*

                </div>
              <select className='w-full' name="stream" value={signupData.stream} onChange={handleChange}>
                <option value="Information Technology">Information Technology</option>
              </select>
                        </label>
              
                        <label className='my-3 border-b-2'>
                          <div>
              If Others, Please Enter Your College Name

                          </div>
              <input
                type="text"
                name="otherCollege"
                value={signupData.otherCollege}
                onChange={handleChange}
                placeholder="Other College Name"
                />
                        </label>
              
                        </div>
            </div>

      <label className='my-3 border-b-2 w-1/4'>
        <div>

        Where Is Your College Located?*
        </div>
        <input
          type="text"
          name="collegeLocation"
          value={signupData.collegeLocation}
          onChange={handleChange}
          placeholder="College Location"
        />
      </label>
    </form>

  );
}

export default Education;
