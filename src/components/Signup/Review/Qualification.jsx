import { useSignupData } from '../../../utils/SignupContext';

function Qualification() {
  const { signupData } = useSignupData();


    return (
      <>
<label className='my-3 gap-2 flex flex-col'>
      <div className="text-gray-500 text-sm ">Qualification*</div>
              {signupData.qualification}
    </label>
      </>
    )
  }

export default Qualification