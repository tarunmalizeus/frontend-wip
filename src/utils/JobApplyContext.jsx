import React, { createContext, useContext, useState } from 'react';

const JobApplyContext = createContext();

export const useJobApplyData = () => useContext(JobApplyContext);

export const JobApplyProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    timeSlot: null,
    preferences: {
      instructionalDesigner: false,
      softwareEngineer: false,
      softwareQualityEngineer: false,
    },
    resume: null,
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const togglePreference = (preference) => {
    setFormData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [preference]: !prev.preferences[preference],
      },
    }));
  };

  const updateResume = (file) => {
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  return (
    <JobApplyContext.Provider value={{ formData, updateFormData, togglePreference, updateResume }}>
      {children}
    </JobApplyContext.Provider>
  );
};
