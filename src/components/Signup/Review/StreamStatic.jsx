
import { useSignupData } from '../../../utils/SignupContext';


function Stream() {
  const { signupData } = useSignupData();


    return (
      <>
<label className='my-3 gap-2 flex flex-col'>
      <div className="text-gray-500 text-sm ">Stream*</div>
      {signupData.stream}
    </label>
      </>
    )
  }

export default Stream