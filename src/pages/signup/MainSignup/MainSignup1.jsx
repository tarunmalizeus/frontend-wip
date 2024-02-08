
import React from 'react';
import { useSignupData } from './SignupContext.jsx';

function MainSignup1() {
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

export default MainSignup1