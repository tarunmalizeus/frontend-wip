import { useSignupData } from '../../../utils/SignupContext';

function Qualification() {
  const { signupData } = useSignupData();


    return (
      <>
<label className='my-3'>
      <div className="text-gray-500 text-sm ">Qualification*</div>
              {signupData.qualification}
    </label>
      </>
    )
  }

export default Qualification