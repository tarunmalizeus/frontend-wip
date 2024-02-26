import { GET_COLLEGES } from '../../../graphqlQueries';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useSignupData } from '../../../utils/SignupContext';

function College() {
    const { signupData, updateSignupData } = useSignupData();
    const [colleges, setColleges] = useState([]);
    const { loading, error, data } = useQuery(GET_COLLEGES);

    const handleChange = (e) => {
        updateSignupData({ [e.target.name]: e.target.value });
      };
    


    useEffect(() => {
        if (!loading && !error) {
          setColleges(data.colleges); // Assuming your GraphQL query returns an array of college objects
        }
      }, [loading, error, data]);


    return (
      <>
    <label className='my-3 border-b-2 gap-2 flex flex-col'>
      <div className="text-gray-500 text-sm ">College*</div>
      <select className='w-full' name="college" value={signupData.college} onChange={handleChange}>
        {loading ? (
          <option value="">Loading...</option>
        ) : error ? (
          <option value="">Error loading colleges</option>
        ) : (
          colleges.map(college => (
            <option key={college.college_id} value={college.college_name}>
              {college.college_name}
            </option>
          ))
        )}
      </select>
    </label>
      </>
    )
  }

export default College