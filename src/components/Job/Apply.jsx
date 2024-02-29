import { useJobApplyData } from '../../utils/JobApplyContext';
import React, { useCallback } from 'react';
import { useQuery, gql } from "@apollo/client";


const QUERY_SLOT_PREF = gql`
query JobById($job_id: Int!) {
  jobById(job_id: $job_id) {
    slots {
      slot_id
      from_time
      to_time
    }
  }
}
`;



const Apply = ({jobIdAndPref}) => {
  const { formData, updateFormData, togglePreference, updateResume  } = useJobApplyData();
    const {job_id,roles}=jobIdAndPref;
    console.log(roles)
    const { loading, error, data } = useQuery(QUERY_SLOT_PREF, {
        variables: { job_id: job_id },
      });

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;
    // console.log(roles)



  const handleTimeSlotChange = useCallback((event) => {
    updateFormData('timeSlot', event.target.value);
  }, [updateFormData]);

  const handlePreferenceChange = useCallback((event) => {
    togglePreference(event.target.name);
  }, [togglePreference]);

  const handleResumeUpload = useCallback((event) => {
    updateResume(event.target.files[0]);
  }, [updateResume]);

  return (
    <div className="bg-white p-4  mx-auto my-4 shadow-md rounded">
      <h2 className="text-lg font-semibold mb-4">Time Slots & Preferences</h2>

      <div className="mb-4">
        <p>Select a Time Slot :</p>


  {data && (data.jobById.slots.map((slot, index) => (
  <div className="flex items-center mb-2" key={slot.slot_id}>
    <input
      id={`timeSlot${index}`}
      type="radio"
      name="timeSlot"
      value={`${slot.from_time}-${slot.to_time}`}
      checked={formData.timeSlot === `${slot.from_time}-${slot.to_time}`}
      onChange={handleTimeSlotChange}
      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
    />
    <label htmlFor={`timeSlot${index}`} className="ml-2 text-sm font-medium text-gray-700">
      {`${slot.from_time} to ${slot.to_time}`}
    </label>
  </div>
)))}

      </div>


      <div className="mb-4">
        <p>Select Your Preference :</p>

        <div className="flex items-center mb-2">
          <input
            id="preference1"
            type="checkbox"
            name="instructionalDesigner"
            checked={formData.preferences.instructionalDesigner}
            onChange={handlePreferenceChange}
            className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500 rounded"
          />
          <label htmlFor="preference1" className="ml-2 text-sm font-medium text-gray-700">
            Instructional Designer
          </label>
        </div>


        <div className="flex items-center mb-2">
          <input
            id="preference2"
            type="checkbox"
            name="softwareEngineer"
            checked={formData.preferences.softwareEngineer}
            onChange={handlePreferenceChange}
            className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500 rounded"
          />
          <label htmlFor="preference2" className="ml-2 text-sm font-medium text-gray-700">
            Software Engineer
          </label>
        </div>


        <div className="flex items-center mb-4">
          <input
            id="preference3"
            type="checkbox"
            name="softwareQualityEngineer"
            checked={formData.preferences.softwareQualityEngineer}
            onChange={handlePreferenceChange}
            className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500 rounded"
          />
          <label htmlFor="preference3" className="ml-2 text-sm font-medium text-gray-700">
            Software Quality Engineer
          </label>
        </div>

      </div>

      <div className="flex items-center justify-start">
        <label className="px-4 py-2 bg-lightgreen text-white text-sm font-medium rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer">
          <span className="mr-2">⬆</span> UPLOAD UPDATED RESUME
          <input
            type="file"
            className="hidden"
            onChange={handleResumeUpload}
          />
        </label>
      </div>
    </div>

  );
};

export default Apply;
``
