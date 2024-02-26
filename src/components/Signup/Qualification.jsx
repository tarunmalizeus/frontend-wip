import { GET_QUALIFICATIONS } from '../../graphqlQueries';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useSignupData } from '../../utils/SignupContext';

function Qualification() {
  const { signupData, updateSignupData } = useSignupData();
  const [qualifications, setQualifications] = useState([]);
  const { loading, error, data } = useQuery(GET_QUALIFICATIONS);

  const handleChange = (e) => {
    updateSignupData({ [e.target.name]: e.target.value });
  };


  useEffect(() => {
    if (!loading && !error) {
      setQualifications(data.qualifications); // Assuming your GraphQL query returns an array of qualification objects
    }
  }, [loading, error, data]);



    return (
      <>
<label className='my-3 border-b-2'>
      <div className="text-gray-500 text-sm ">Qualification*</div>
      <select className='w-full' name="qualification" value={signupData.qualification} onChange={handleChange}>
        {loading ? (
          <option value="">Loading...</option>
        ) : error ? (
          <option value="">Error loading qualifications</option>
        ) : (
          qualifications.map(qualification => (
            <option key={qualification.qualification_id} value={qualification.qualification_name}>
              {qualification.qualification_name}
            </option>
          ))
        )}
      </select>
    </label>
      </>
    )
  }

export default Qualification