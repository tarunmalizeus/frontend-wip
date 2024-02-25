import { useRef } from 'react';
import default_pfp from '../../assets/default_pfp.png';
import upload_resume from '../../assets/Upload_black_24dp.svg';

import { useSignupData } from '../../utils/SignupContext';

function PersonalDetails() {
  const photoInputRef = useRef(null);
  
  const handlePhotoButtonClick = () => {
    photoInputRef.current.click();
  };


  const fileInputRef = useRef(null);

  const handleFileButtonClick = () => {
    console.log('file button clicked');
    fileInputRef.current.click();
  };



  const { signupData, updateSignupData } = useSignupData();

  const handleChange = (e) => {
    updateSignupData({ [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  };

  const handleFileChange = (e) => {
    updateSignupData({ [e.target.name]: e.target.files[0] });
  };

  return (
    // console.log(signupData.resumeFile),
    // console.log(signupData.imageFile),

    <div className='flex flex-row p-8 mx-4 bg-white justify-between '>
      <form className='flex flex-col gap-8'>
        <div>
          <div className="text-gray-500 text-sm ">First name*</div>
          <input
            className='my-1 border-b-2 w-full'
            name="firstName"
            value={signupData.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
  
        <div className="text-gray-500 text-sm ">Last name*</div>
          <input
            className='my-1 border-b-2 w-full'
            name="lastName"
            value={signupData.lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <div className="text-gray-500 text-sm ">Email*</div>
          <input
            className='my-1 border-b-2 w-full'
            type="email"
            name="email"
            value={signupData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <div className="text-gray-500 text-sm ">Password*</div>
          <input
            className='my-1 border-b-2 w-full'
            type="password"
            name="password"
            value={signupData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <div className="text-gray-500 text-sm ">Confirm Password*</div>
          <input
            className='my-1 border-b-2 w-full'
            type="password"
            name="confirmPassword"
            value={signupData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div>
          <div>Phone</div>
          <input
            className='my-1 border-b-2'
            name="phone"
            value={signupData.phone}
            onChange={handleChange}
          />
        </div>


        {/* <div>
          <div>Resume</div>
          <input
            className='my-4'
            type="file"
            name="resumeFile"
            onChange={handleFileChange}
          />
        </div> */}

    

        <div className="flex gap-1 -my-3  cursor-pointer items-center">

          <img src={upload_resume} width={24} alt="" />

            <div className="text-[#1F7A54] font-semibold text-lg">

            <button onClick={handleFileButtonClick}>
              UPLOAD RESUME 
            </button>
          <input
              className='my-4'
              type="file"
              name="resumeFile"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}    
              accept="application/pdf"
            />

            </div>

          </div>

        

        <div>
          <div>Enter Portfolio URL (if any)</div>
          <input
            className='my-1 border-b-2'
            name="portfolioUrl"
            value={signupData.portfolioUrl}
            onChange={handleChange}
          />
        </div>


          <div className='flex flex-col'>
        <label>

          <div>Preferred Job riles</div>
          <input
            className='my-1 border-b-2'
            type="checkbox"
            name="instructionalDesigner"
            
            checked={signupData.instructionalDesigner || false}
            onChange={handleChange}
          />
          Instructional Designer
        </label>


        <label>
          <input
            type="checkbox"
            name="softwareEngineer"
            checked={signupData.softwareEngineer || false}
            onChange={handleChange}
          />
          Software Engineer
        </label>
        <label>
          <input
            type="checkbox"
            name="softwareQualityEngineer"
            checked={signupData.softwareQualityEngineer || false}
            onChange={handleChange}
          />
          Software Quality Engineer
        </label>


        </div>

<div>
  
          <div>If You Are Registering Via A Referral, Please Mention Full Name Of The Employee Who Referred You</div>
          <input
            className='my-4 border-b-2'
            name="referralName"
            value={signupData.referralName}
            onChange={handleChange}
  
          />
</div>


        <label>
        <input
          type="checkbox"
          name="jobUpdates"
          checked={signupData.jobUpdates || false}
          onChange={handleChange}
        /> 
        Send me job related updates via mail
        </label>
        
      </form>



      <div className="w-full grid justify-end content-start p-4">
          <div className="flex flex-col gap-8">
            <img
              className="rounded-full self-center"
              src={!signupData.imageFile?default_pfp:URL.createObjectURL(signupData.imageFile)}
              width={200}
              height={200}
              alt="pfp"
            />
            <div className="text-xl font-semibold text-green-600">
            <button onClick={handlePhotoButtonClick}>UPLOAD PROFILE PHOTO</button>
              <input
                type="file"
                name="imageFile"
                ref={photoInputRef}
                onChange={handleFileChange}    
                style={{ display: 'none' }}    
                accept="image/*"          
              />
            </div>

            <div className="text-gray-500 text-base self-center -my-6 font-semibold">
              max image size 5mb*
            </div>

          </div>
        </div>







    </div>
  );
}

export default PersonalDetails;
