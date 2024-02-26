import default_pfp from '../../../assets/default_pfp.png';
import upload_resume from '../../../assets/Upload_black_24dp.svg';

import { useSignupData } from "../../../utils/SignupContext"


function Personal() {
  const { signupData} = useSignupData();
    return (

      <div className='flex flex-row p-8 mx-4 bg-white justify-between '>
      <div className='flex flex-col gap-8'>
        <div>
          <div className="text-gray-500 text-sm ">First name </div>
          <input
            className='my-1  w-full bg-white'
            name="firstName"
            value={signupData.firstName}
            disabled
            
          />
        </div>

        <div>
  
        <div className="text-gray-500 text-sm ">Last name </div>
          <input
            className='my-1  w-full bg-white'
            name="lastName"
            value={signupData.lastName}
            disabled
          />
        </div>

        <div>
          <div className="text-gray-500 text-sm ">Email </div>
          <input
            className='my-1  w-full bg-white'
            type="email"
            name="email"
            value={signupData.email}
            disabled
          />
        </div>



        <div>
          <div className="text-gray-500 text-sm ">Phone </div>
          <input
            className='my-1  bg-white'
            name="phone"
            value={signupData.phone}
            disabled
          />
        </div> 



    

        <div className="flex gap-1 -my-3  cursor-pointer items-center">

          <img src={upload_resume} width={24} alt="" />

            <div className="text-[#1F7A54] font-semibold text-lg">

            <button >
            {signupData.resumeFile ? `${signupData.resumeFile.name}` : "UPLOAD RESUME"}
            </button>


            </div>

          </div>


        <div>
          <div className="text-gray-500 text-sm ">Enter Portfolio URL (if any)</div>
          <input
            className='my-1  w-full bg-white'
            name="portfolioUrl"
            value={signupData.portfolioUrl?signupData.portfolioUrl:'-'}
            disabled
          />
        </div>


          <div className='flex flex-col gap-4'>

          <div className="text-gray-500 text-sm ">Preferred Job roles </div>
        <label className='gap-2 flex flex-row'>
          <input
            className='my-1 '
            type="checkbox"
            name="instructionalDesigner"
            disabled
            checked={signupData.instructionalDesigner || false}
          />
          <span>Instructional Designer</span>
        </label>


        <label className='gap-2 flex flex-row'>
          <input
            type="checkbox"
            name="softwareEngineer"
            checked={signupData.softwareEngineer || false}
            disabled
          />
          Software Engineer
        </label>

        <label className='gap-2 flex flex-row'>
          <input
            type="checkbox"
            name="softwareQualityEngineer"
            checked={signupData.softwareQualityEngineer || false}
            disabled
          />
          Software Quality Engineer
        </label>

      
        </div>

<div>
  
          <div className="text-gray-500 text-sm ">If You Are Registering Via A Referral, Please Mention Full Name Of The Employee Who Referred You</div>
          <input
            className='my-4  w-full bg-white'
            name="referralName"
            value={signupData.referralName?signupData.referralName:'-'}
            disabled
          />
</div>


        <label className='gap-2 flex flex-row'>
        <input
          type="checkbox"
          name="jobUpdates"
          checked={signupData.jobUpdates || false}
          disabled
        /> 
        Send me job related updates via mail
        </label>
        
      </div>



      <div className="w-full grid justify-end content-start p-4">
          <div className="flex flex-col gap-8">
            <img
              className="rounded-full self-center"
              src={!signupData.imageFile?default_pfp:URL.createObjectURL(signupData.imageFile)}
              width={200}
              height={200}
              alt="pfp"
            />

          </div>
        </div>

    </div>
      
 
    )
  }

export default Personal