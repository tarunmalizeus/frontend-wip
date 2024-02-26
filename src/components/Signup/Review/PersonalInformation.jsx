import default_pfp from '../../../assets/default_pfp.png';
import upload_resume from '../../../assets/Upload_black_24dp.svg';

import { useSignupData } from "../../../utils/SignupContext"


function PersonalInformation() {
  const { signupData} = useSignupData();
    return (

      <div className='flex flex-row p-8 mx-4 bg-white justify-between '>
      <div className='flex flex-col gap-8'>
        <div>
          <div className="text-gray-500 text-sm ">First name*</div>
          <input
            className='my-1  w-full bg-white'
            name="firstName"
            value={signupData.firstName}
            disabled
            
          />
        </div>

        <div>
  
        <div className="text-gray-500 text-sm ">Last name*</div>
          <input
            className='my-1  w-full bg-white'
            name="lastName"
            value={signupData.lastName}
            disabled
          />
        </div>

        <div>
          <div className="text-gray-500 text-sm ">Email*</div>
          <input
            className='my-1  w-full bg-white'
            type="email"
            name="email"
            value={signupData.email}
            disabled
          />
        </div>



        <div>
          <div className="text-gray-500 text-sm ">Phone*</div>
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

          <div className="text-gray-500 text-sm ">Preferred Job roles*</div>
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
            className='my-4  w-full'
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
      
    // <div className='flex flex-row p-4 m-4 bg-white h-screen justify-between '>
    //   <form className='flex flex-col space-y-2'>
    //     <div>
    //       <div>First name</div>
    //       <input
    //         className='my-1'
    //         name="firstName"
    //         placeholder={signupData.firstName}
    //       />
    //     </div>

    //     <div>
    //       <div>Last name</div>
    //       <input
    //         className='my-1'
    //         name="lastName"
    //         placeholder={signupData.lastName}
    //       />
    //     </div>

    //     <div>
    //       <div>Email</div>
    //       <input
    //         className='my-1'
    //         type="email"
    //         name="email"
    //         placeholder={signupData.email}
    //       />
    //     </div>

    //     <div>
    //       <div>Phone</div>
    //       <input
    //         className='my-1'
    //         name="phone"
    //         placeholder={signupData.phone}
    //       />
    //     </div>
        
    //     <div className='my-1' >
    //     <p>Resume: {signupData.resumeFile ? signupData.resumeFile.name : 'None'}</p>
    //     </div>

    //     <div>
    //       <div>Enter Portfolio URL (if any)</div>
    //       <input
    //         className='my-1'
    //         name="portfolioUrl"
    //         placeholder={signupData.portfolioUrl}
    //       />
    //     </div>


    //       <div className='flex flex-col'>
    //     <label>
    //       <div>Preferred Job riles</div>
    //       <input
    //         className='my-1'
    //         type="checkbox"
    //         name="instructionalDesigner"
    //         checked={signupData.instructionalDesigner || false}

    //       />
    //       Instructional Designer
    //     </label>



    //     <label>
    //       <input
    //         type="checkbox"
    //         name="softwareEngineer"
    //         checked={signupData.softwareEngineer || false}

    //       />
    //       Software Engineer
    //     </label>
    //     <label>
    //       <input
    //         type="checkbox"
    //         name="softwareQualityEngineer"
    //         checked={signupData.softwareQualityEngineer || false}

    //       />
    //       Software Quality Engineer
    //     </label>


    //     </div>


    //     <div>
    //       <div>If You Are Registering Via A Referral, Please Mention Full Name Of The Employee Who Referred You</div>
    //       <input
    //         className='my-4'
    //         name="referralName"
    //         placeholder={signupData.referralName}
    //       />
    //     </div>


    //     <label>
    //     <input
    //       type="checkbox"
    //       name="jobUpdates"
    //       checked={signupData.jobUpdates || false}
    //     /> 
    //     Send me job related updates via mail
    //     </label>
        
    //   </form>
    //   <div>
    //   {signupData.imageFile && ( 
    //     <img 
    //       src={URL.createObjectURL(signupData.imageFile)} 
    //       alt="profile" 
    //       className="preview-image rounded-full h-36 w-36" 
    //     /> 
    //   )} 
    // </div>

    // </div>
    )
  }

export default PersonalInformation