import { useSignupData } from '../../../utils/SignupContext';

function College() {
    const { signupData, updateSignupData } = useSignupData();
 

    return (
      <>
    <label className='my-3 gap-2 flex flex-col'>
      <div className="text-gray-500 text-sm ">College </div>

              {signupData.college}
    </label>
      </>
    )
  }

export default College