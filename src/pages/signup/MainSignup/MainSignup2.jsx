
import React from 'react';
import { useSignupData } from '../../../utils/SignupContext.jsx';

function MainSignup2() {
  const { signupData, updateSignupData } = useSignupData();

  const handleChange = (e) => {
    updateSignupData({ [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input
        name="email"
        value={signupData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {/* More inputs as needed */}
    </form>
  );
  }

export default MainSignup2