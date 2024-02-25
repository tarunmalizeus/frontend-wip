import { GET_STREAM } from '../../graphqlQueries';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useSignupData } from '../../utils/SignupContext';


function Stream() {
    const { signupData, updateSignupData } = useSignupData();
    const [streams, setStreams] = useState([]);
    const { loading, error, data } = useQuery(GET_STREAM);
  
    const handleChange = (e) => {
      updateSignupData({ [e.target.name]: e.target.value });
    };
  
  
    useEffect(() => {
      if (!loading && !error) {
        setStreams(data.streams); // Assuming your GraphQL query returns an array of qualification objects
      }
    }, [loading, error, data]);
  


    return (
      <>
<label className='my-3 border-b-2'>
      <div>Stream*</div>
      <select className='w-full' name="stream" value={signupData.stream} onChange={handleChange}>
        {loading ? (
          <option value="">Loading...</option>
        ) : error ? (
          <option value="">Error loading streams</option>
        ) : (
          streams.map(stream => (
            <option key={stream.stream_id} value={stream.stream_name}>
              {stream.stream_name}
            </option>
          ))
        )}
      </select>
    </label>
      </>
    )
  }

export default Stream