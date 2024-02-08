
import React from 'react';
import { useSignupData } from './SignupContext.jsx';

function Education() {
  const { signupData, updateSignupData } = useSignupData();

  const handleChange = (e) => {
    updateSignupData({ [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input
        name="percentage"
        value={signupData.percentage}
        onChange={handleChange}
        placeholder="Percentage"
      />
      {/* More inputs as needed */}
    </form>
  );
  }

export default Education