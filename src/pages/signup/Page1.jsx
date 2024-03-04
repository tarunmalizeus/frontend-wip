import { useSignupData } from '../../utils/SignupContext';
import { useRef } from 'react';
import default_pfp from '../../assets/default_pfp.png';
import upload_resume from '../../assets/Upload_black_24dp.svg';

import { usePage1ErrorContext } from '../../utils/Page1ErrorContext';

function PersonalDetails() {
  
  const photoInputRef = useRef(null);
  
  const handlePhotoButtonClick = () => {
    photoInputRef.current.click();
  };
  
  
  const fileInputRef = useRef(null);
  
  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };
  
  
  const { signupData, updateSignupData } = useSignupData();
  const {
    firstNameError, setFirstNameError,
    lastNameError, setLastNameError,
    passwordError, setPasswordError,
    cpasswordError, setCpasswordError,
    emailError, setEmailError,
    phoneError, setPhoneError,
    resumeError, setResumeError,
    pfpError, setPfpError,
    roleError, setRoleError
  } = usePage1ErrorContext();

  let instructionalDesigner, softwareEngineer, softwareQualityEngineer

  const handleChange = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    updateSignupData({ [name]: value });
    
    
    if(name==="instructionalDesigner" || name==="softwareEngineer" || name==="softwareQualityEngineer")
    {
      instructionalDesigner=signupData.instructionalDesigner;
      softwareEngineer= signupData.softwareEngineer
      softwareQualityEngineer=signupData.softwareQualityEngineer;
      if(name==="instructionalDesigner"){
        instructionalDesigner = value;
      }
      if(name==="softwareEngineer"){
        softwareEngineer = value;
      }
      if(name==="softwareQualityEngineer"){
        softwareQualityEngineer = value;
      }
      if (instructionalDesigner || softwareEngineer || softwareQualityEngineer) {
        console.log("No error");
        setRoleError("");
      }
      else {
        console.log("Error");
        setRoleError("Please select at least one role.");
      }
    }





    if(name === "firstName"){
      const nameRegex = /^[a-zA-Z]+$/;
      if (!nameRegex.test(value)) {
        setFirstNameError("Please enter a valid name.");
      } else {
        setFirstNameError("");
      }
    }
  
    if(name === "lastName"){
      const nameRegex = /^[a-zA-Z]+$/;
      if (!nameRegex.test(value)) {
        setLastNameError("Please enter a valid name.");
      } else {
        setLastNameError("");
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }

    if(name === "password"){
      if(value.length < 8){
        setPasswordError("Password must be at least 8 characters long.");
      } else {
        setPasswordError("");
      }

    }  

    if(name === "confirmPassword"){
      if (value !== signupData.password) {
        setCpasswordError("Passwords do not match.");
      } else {
        setCpasswordError("");
      }
    }

    if(name === "phone"){
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(value)) {
        setPhoneError("Please enter a valid phone number.");
      } else {
        setPhoneError("");
      }
    }


    
    
  };

  const handleFileChange = (e) => {


    let name, value;
    name = e.target.name;
    value = e.target.value;


    if(name === "resumeFile"){
      if(value.size > 5*1024*1024){
        setResumeError("File size should be less than 5mb.");
      } else {
        setResumeError("");
      }
    }

    if(name === "imageFile"){
      if(value.size > 5*1024*1024){
        setPfpError("File size should be less than 5mb.");
      } else {
        setPfpError("");
      }
    }

    updateSignupData({ [e.target.name]: e.target.files[0] });
  };

  return (


    <div className='flex flex-row p-8 mx-4 bg-white justify-between '>
      <div className='flex flex-col gap-8'>
        <div>
          <div className="text-gray-500 text-sm ">First name*</div>
          <input
            className='my-1 border-b-2 w-full'
            name="firstName"
            value={signupData.firstName}
            onChange={handleChange}
          />
          {firstNameError && <p className="text-red-500">{firstNameError}</p>}
        </div>

        <div>
  
        <div className="text-gray-500 text-sm ">Last name*</div>
          <input
            className='my-1 border-b-2 w-full'
            name="lastName"
            value={signupData.lastName}
            onChange={handleChange}
          />
          {lastNameError && <p className="text-red-500">{lastNameError}</p>}
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
          {emailError && <p className="text-red-500">{emailError}</p>}
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
            {passwordError && <p className="text-red-500">{passwordError}</p>}
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
          {cpasswordError && <p className="text-red-500">{cpasswordError}</p>}
        </div>

        <div>
          <div className="text-gray-500 text-sm ">Phone*</div>
          <input
            className='my-1 border-b-2'
            name="phone"
            value={signupData.phone}
            onChange={handleChange}
          />
          {phoneError && <p className="text-red-500">{phoneError}</p>}
        </div> 



    

        <div className="flex gap-1 -my-3  cursor-pointer items-center">

          <img src={upload_resume} width={24} alt="" />

            <div className="text-[#1F7A54] font-semibold text-lg">

            <button onClick={handleFileButtonClick}>
            {signupData.resumeFile ? `${signupData.resumeFile.name}` : "UPLOAD RESUME"}
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

            {resumeError && <p className="text-red-500">{resumeError}</p>}  

            </div>

          </div>


        <div>
          <div className="text-gray-500 text-sm ">Enter Portfolio URL (if any)</div>
          <input
            className='my-1 border-b-2 w-full'
            name="portfolioUrl"
            value={signupData.portfolioUrl}
            onChange={handleChange}
          />
        </div>


          <div className='flex flex-col gap-4'>

          <div className="text-gray-500 text-sm ">Preferred Job roles*</div>
        <label className='gap-2 flex flex-row'>
          <input
            className='my-1 border-b-2'
            type="checkbox"
            name="instructionalDesigner"
            
            checked={signupData.instructionalDesigner || false}
            onChange={handleChange}
          />
          <span>Instructional Designer</span>
        </label>


        <label className='gap-2 flex flex-row'>
          <input
            type="checkbox"
            name="softwareEngineer"
            checked={signupData.softwareEngineer || false}
            onChange={handleChange}
          />
          Software Engineer
        </label>

        <label className='gap-2 flex flex-row'>
          <input
            type="checkbox"
            name="softwareQualityEngineer"
            checked={signupData.softwareQualityEngineer || false}
            onChange={handleChange}
          />
          Software Quality Engineer
        </label>

        {roleError && <p className="text-red-500">{roleError}</p>}  

        </div>

<div>
  
          <div className="text-gray-500 text-sm ">If You Are Registering Via A Referral, Please Mention Full Name Of The Employee Who Referred You</div>
          <input
            className='my-4 border-b-2 w-full'
            name="referralName"
            value={signupData.referralName}
            onChange={handleChange}
  
          />
</div>


        <label className='gap-2 flex flex-row'>
        <input
          type="checkbox"
          name="jobUpdates"
          checked={signupData.jobUpdates || false}
          onChange={handleChange}
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
            {pfpError && <p className="text-red-500">{pfpError}</p>}
          </div>
        </div>

    </div>
  );
}

export default PersonalDetails;
