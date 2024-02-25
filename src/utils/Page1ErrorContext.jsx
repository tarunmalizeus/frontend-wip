// ErrorContext.js

import React, { createContext, useContext, useState } from 'react';

// Create a context to hold the error messages and their setter functions
const Page1ErrorContext = createContext();

// Custom hook to access the context
export const usePage1ErrorContext = () => useContext(Page1ErrorContext);

// Error context provider component
export const Page1ErrorProvider = ({ children }) => {
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [cpasswordError, setCpasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [resumeError, setResumeError] = useState("");
  const [pfpError, setPfpError] = useState("");
  const [roleError, setRoleError] = useState("");

  return (
    <Page1ErrorContext.Provider
      value={{
        firstNameError, setFirstNameError,
        lastNameError, setLastNameError,
        emailError, setEmailError,
        cpasswordError, setCpasswordError,
        phoneError, setPhoneError,
        resumeError, setResumeError,
        pfpError, setPfpError,
        roleError, setRoleError
      }}
    >
      {children}
    </Page1ErrorContext.Provider>
  );
};
