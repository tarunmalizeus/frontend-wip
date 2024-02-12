

import React from 'react';
import { useSignupData } from '../../utils/SignupContext';

function PersonalDetails() {
  const { signupData, updateSignupData } = useSignupData();

  const handleChange = (e) => {
    updateSignupData({ [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  };

  // Handle file input separately
  const handleFileChange = (e) => {
    // Assuming you want to store the file in the same state object
    updateSignupData({ [e.target.name]: e.target.files[0] });
  };

  return (
    
    <div className='flex flex-row p-4 m-4 bg-white h-screen justify-between '>
      <form className='flex flex-col '>
        <div>
          <div>First name</div>
          <input
            className='my-1 border-b-2'
            name="firstName"
            value={signupData.firstName}
            onChange={handleChange}
          />
        </div>
<div>
  
          <div>Last name</div>
          <input
            className='my-1 border-b-2'
            name="lastName"
            value={signupData.lastName}
            onChange={handleChange}
          />
</div>

        <div>
          <div>Email</div>
          <input
            className='my-1 border-b-2'
            type="email"
            name="email"
            value={signupData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <div>Phone</div>
          <input
            className='my-1 border-b-2'
            name="phone"
            value={signupData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <div>Resume</div>
          <input
            className='my-4'
            type="file"
            name="resumeFile"
            onChange={handleFileChange}
          />
        </div>

        <div>
          <div>Enter Portfolio URL (if any)</div>
          <input
            className='my-1 border-b-2'
            name="portfolioUrl"
            value={signupData.portfolioUrl}
            onChange={handleChange}
          />
        </div>


          <div className='flex flex-col'>
        <label>

          <div>Preferred Job riles</div>
          <input
            className='my-1 border-b-2'
            type="checkbox"
            name="instructionalDesigner"
            
            checked={signupData.instructionalDesigner || false}
            onChange={handleChange}
          />
          Instructional Designer
        </label>


        <label>
          <input
            type="checkbox"
            name="softwareEngineer"
            checked={signupData.softwareEngineer || false}
            onChange={handleChange}
          />
          Software Engineer
        </label>
        <label>
          <input
            type="checkbox"
            name="softwareQualityEngineer"
            checked={signupData.softwareQualityEngineer || false}
            onChange={handleChange}
          />
          Software Quality Engineer
        </label>


        </div>

<div>
  
          <div>If You Are Registering Via A Referral, Please Mention Full Name Of The Employee Who Referred You</div>
          <input
            className='my-4 border-b-2'
            name="referralName"
            value={signupData.referralName}
            onChange={handleChange}
  
          />
</div>


        <label>
        <input
          type="checkbox"
          name="jobUpdates"
          checked={signupData.jobUpdates || false}
          onChange={handleChange}
        /> 
        Send me job related updates via mail
        </label>
        
      </form>

      <div>
        <img src="https://via.placeholder.com/150" alt="profile" />
      </div>

    </div>
  );
}

export default PersonalDetails;
