import React, { createContext, useContext, useState } from 'react';

const SignupContext = createContext();

export const useSignupData = () => useContext(SignupContext);

export const SignupProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({

    name: '',
    email: '',
    password: '',
    percentage: 0,

  });


  const updateSignupData = (newData) => {
    setSignupData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <SignupContext.Provider value={{ signupData, updateSignupData }}>
      {children}
    </SignupContext.Provider>
  );
};
