
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
      <p>Resume: {signupData.resumeFile ? signupData.resumeFile.name : 'None'}</p>
      {signupData.instructionalDesigner ? <p>Instructional Designer</p> : null}
      {signupData.softwareEngineer ? <p>Software Engineer</p> : null}
      {signupData.softwareQualityEngineer ? <p>Software Quality Engineer</p> : null}
      {signupData.jobUpdates ? <p>Job Updates: Yes</p> : <p>Job Updates: No</p>}

      <p>{signupData.jobUpdates}</p>
      <p>{signupData.referralName}</p> 
      {/* <p>{signupData.percentage}</p> */}
    </div>
  );
  }

export default Review