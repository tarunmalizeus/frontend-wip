
import React from 'react';
import { useSignupData } from '../../../utils/SignupContext.jsx';

function Review() {
  const { signupData} = useSignupData();

  return (
    <div>
      <h1>Review</h1>
      <p>{signupData.email}</p>
      <p>{signupData.percentage}</p>
    </div>
  );
  }

export default Review