// import React, { createContext, useContext, useState } from 'react';

// const SignupContext = createContext();

// export const useSignupData = () => useContext(SignupContext);

// export const SignupProvider = ({ children }) => {
//   const [signupData, setSignupData] = useState({

//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     password: '',
//     percentage: 0,
//     porfolioUrl: '',
    

//   });


//   const updateSignupData = (newData) => {
//     setSignupData((prevData) => ({ ...prevData, ...newData }));
//   };

//   return (
//     <SignupContext.Provider value={{ signupData, updateSignupData }}>
//       {children}
//     </SignupContext.Provider>
//   );
// };
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
    percentage: 0,
    portfolioUrl: '',
    resumeFile: null,  // Store the resume file
    instructionalDesigner: false,
    softwareEngineer: false,
    softwareQualityEngineer: false,
    jobUpdates: false, 
    referralName: ''
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
