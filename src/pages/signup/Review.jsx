
import React from 'react';
import { useSignupData } from '../../utils/SignupContext.jsx';

function Review() {
  const { signupData} = useSignupData();

  return (
    <div>
      <h1>Review</h1>
      <p>{signupData.firstName}</p>
      <p>{signupData.lastName}</p>
      <p>{signupData.email}</p>
      <p>{signupData.phone}</p>
      <p>{signupData.portfolioUrl}</p>
      {/* <p>{signupData.resumeFile}</p> */}
      <p>Resume: {signupData.resumeFile ? signupData.resumeFile.name : 'None'}</p>
      <p>{signupData.instructionalDesigner}</p>
      <p>{signupData.softwareEngineer}</p>
      <p>{signupData.softwareQualityEngineer}</p>
      {/* <p>{signupData.jobUpdates}</p> */}
      {/* <p>{signupData.referralName}</p> / */}
      {/* <p>{signupData.percentage}</p> */}
    </div>
  );
  }

export default Review