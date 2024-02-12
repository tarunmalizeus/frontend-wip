
import React, { createContext, useContext, useState } from 'react';

const SignupContext = createContext();

export const useSignupData = () => useContext(SignupContext);

export const SignupProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    portfolioUrl: '',
    resumeFile: null,  // Store the resume file
    instructionalDesigner: false,
    softwareEngineer: false,
    softwareQualityEngineer: false,
    jobUpdates: false, 
    referralName: '',
    percentage: 0,
    yearOfPassing: '2020', // Default selection
    qualification: 'B.Tech', // Default selection
    stream: 'Information Technology', // Default selection
    college: 'PIT', // Default selection
    otherCollege: '',
    collegeLocation: '',
    applicantType: 'Fresher', // Default 
    yearsOfExperience: 0,
    currentCTC: 0,
    expectedCTC: 0,
    experiencedTech: [], // Array for checkboxes
    familiarTech: [], // Array for checkboxes
    otherExperiencedTech: '',
    otherFamiliarTech: '',
    onNoticePeriod: 'No', // Default
    noticePeriodEnd: '', 
    noticePeriodLength: 0,
    appearedForTests: 'No', 
    testNames: '',

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
