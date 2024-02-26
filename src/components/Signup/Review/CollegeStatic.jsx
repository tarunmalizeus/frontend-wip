import { useSignupData } from '../../../utils/SignupContext';

function College() {
    const { signupData, updateSignupData } = useSignupData();
 

    return (
      <>
    <label className='my-3'>
      <div className="text-gray-500 text-sm ">College*</div>

              {signupData.college}
    </label>
      </>
    )
  }

export default College