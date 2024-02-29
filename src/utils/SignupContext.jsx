import React, { createContext, useContext, useState } from 'react';

const SignupContext = createContext();

export const useSignupData = () => useContext(SignupContext);

export const SignupProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    password: '',
    portfolioUrl: '',
    imageFile: null,  // Store the image file
    resumeFile: null,  // Store the resume file
    instructionalDesigner: false,
    softwareEngineer: false,
    softwareQualityEngineer: false,
    jobUpdates: false, 
    referralName: '',
    percentage: 0,
    yearOfPassing: '2020', // Default selection
    qualification: 'Bachelor of Technology', // Default selection
    stream: 'Computer Science', // Default selection
    college: 'MIT', // Default selection
    otherCollege: '',
    collegeLocation: '',


    applicantType: 'Fresher', // Default 
    yearsOfExperience: 0,
    currentCTC: 0,
    expectedCTC: 0,

    
    
    onNoticePeriod: 'No', // Default
    noticePeriodEnd: '', 
    noticePeriodLength: 0,
    appearedForTests: 'No', 
    testNames: '',

    
    otherExperiencedTech: '',
    otherFamiliarTech: '',
    
    experiencedTech: [], // Array for checkboxes
    familiarTech: [], // Array for checkboxes
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
