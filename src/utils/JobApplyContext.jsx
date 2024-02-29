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

  const togglePreference = (preference) => {
    setJobApplyData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [preference]: !prev.preferences[preference],
      },
    }));
  };

  // const updateResume = (file) => {
  //   setJobApplyData((prev) => ({ ...prev, resumeFile: file }));
  // };

  return (
    <JobApplyContext.Provider value={{ jobApplyData, updateJobApplyData, togglePreference}}>
      {children}
    </JobApplyContext.Provider>
  );
};
