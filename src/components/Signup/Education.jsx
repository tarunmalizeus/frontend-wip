
import React from 'react';
import { useSignupData } from '../../utils/SignupContext.jsx';

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
    </form>
  );
  }

export default Education