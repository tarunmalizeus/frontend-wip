import { useJobApplyData } from '../../utils/JobApplyContext';
import { useQuery, gql } from "@apollo/client";
import upload_resume from '../../assets/Upload_black_24dp.svg';
import { useRef } from 'react';

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


const Apply = ({ jobIdAndPref }) => {

  const fileInputRef = useRef(null);
  
  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  
  const { jobApplyData, updateJobApplyData} = useJobApplyData();
  
  
  const handleFileChange = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    // if(name === "resumeFile"){
    //   if(value.size > 5*1024*1024){
    //     setResumeError("File size should be less than 5mb.");
    //   } else {
    //     setResumeError("");
    //   }
    // }
    updateJobApplyData({ [e.target.name]: e.target.files[0] });
  };


const handleChange = (e) => {
  updateJobApplyData({ [e.target.name]: e.target.value });
};




const handleCheckboxChange = (e) => {
  let updatedArray = jobApplyData[e.target.name];
  if (e.target.checked) {
    updatedArray = [...updatedArray, e.target.value];
  } else {
    updatedArray = updatedArray.filter((item) => item !== e.target.value);
  }
  updateJobApplyData({ [e.target.name]: updatedArray });
};


  const { job_id, roles } = jobIdAndPref;
  const { loading, error, data } = useQuery(QUERY_SLOT_PREF, {
    variables: { job_id: job_id },
    context: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('site')}`
      }
    }
  });

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

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
              checked={jobApplyData.timeSlot === `${slot.from_time}-${slot.to_time}`}
              onChange={handleChange}
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
        {roles.map((role, index) => (
          <div className="flex items-center mb-2" key={role.role_id}>

        <input
          id={`preference${index}`}
          type="checkbox"
          name="preferences"
          value={role.role_name}
          checked={jobApplyData.preferences.includes(role.role_name)}
          onChange={handleCheckboxChange}
          className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500 rounded"
        />
        <label htmlFor={`preference${index}`} className="ml-2 text-sm font-medium text-gray-700">
        {role.role_name}
        </label>
        </div>



        ))} 
      </div>




      <div className="flex gap-1 -my-3  cursor-pointer items-center">
        <img src={upload_resume} width={24} alt="" />
        <div className="text-[#1F7A54] font-semibold text-lg">
          <button onClick={handleFileButtonClick}>
            {jobApplyData.resumeFile ? `${jobApplyData.resumeFile.name}` : "UPLOAD UPDATED RESUME"}
          </button>

          <input
            className='my-4'
            type="file"
            name="resumeFile"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
            accept="application/pdf"
          />
      </div>

      </div>


    </div>

  );
};

export default Apply;
``
