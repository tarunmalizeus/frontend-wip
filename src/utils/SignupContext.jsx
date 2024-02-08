import React, { createContext, useContext, useState } from 'react';

const SignupContext = createContext();

export const useSignupData = () => useContext(SignupContext);

export const SignupProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({
    // Initialize state structure for signup data
    email: '',
    password: '',
    // Add more fields as necessary
  });

  // Function to update the signup data
  const updateSignupData = (newData) => {
    setSignupData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <SignupContext.Provider value={{ signupData, updateSignupData }}>
      {children}
    </SignupContext.Provider>
  );
};
