// ErrorContext.js

import React, { createContext, useContext, useState } from 'react';

// Create a context to hold the error messages and their setter functions
const SignupErrorContext = createContext();

// Custom hook to access the context
export const useSignupErrorContext = () => useContext(SignupErrorContext);

// Error context provider component
export const Page1ErrorProvider = ({ children }) => {
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cpasswordError, setCpasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [resumeError, setResumeError] = useState("");
  const [pfpError, setPfpError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [collegeLocationError, setCollegeLocationError] = useState("");

  return (
    <SignupErrorContext.Provider
      value={{
        firstNameError, setFirstNameError,
        lastNameError, setLastNameError,
        emailError, setEmailError,
        passwordError, setPasswordError,
        cpasswordError, setCpasswordError,
        phoneError, setPhoneError,
        resumeError, setResumeError,
        pfpError, setPfpError,
        roleError, setRoleError,
        collegeLocationError, setCollegeLocationError,
      }}
    >
      {children}
    </SignupErrorContext.Provider>
  );
};
