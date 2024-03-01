import React, { createContext, useContext, useState } from 'react';

const JobApplyContext = createContext();

export const useJobApplyData = () => useContext(JobApplyContext);

export const JobApplyProvider = ({ children }) => {
  const [jobApplyData, setJobApplyData] = useState({
    timeSlot: null,
    preferences: [],
    resumeFile: null,
    
  });

  const updateJobApplyData = (newData) => {
    setJobApplyData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <JobApplyContext.Provider value={{ jobApplyData, updateJobApplyData}}>
      {children}
    </JobApplyContext.Provider>
  );
};
