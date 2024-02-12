import { useSignupData } from "../../../utils/SignupContext"


function PersonalInformation() {
  const { signupData, updateSignupData } = useSignupData();

  const handleChange = (e) => {
    updateSignupData({ [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.placeholder });
  };

  // Handle file input separately
  const handleFileChange = (e) => {
    // Assuming you want to store the file in the same state object
    updateSignupData({ [e.target.name]: e.target.files[0] });
  };
    return (

    <div className='flex flex-row p-4 m-4 bg-white h-screen justify-between '>
      <form className='flex flex-col space-y-2'>
        <div>
          <div>First name</div>
          <input
            className='my-1'
            name="firstName"
            placeholder={signupData.firstName}
          />
        </div>

        <div>
          <div>Last name</div>
          <input
            className='my-1'
            name="lastName"
            placeholder={signupData.lastName}
          />
        </div>

        <div>
          <div>Email</div>
          <input
            className='my-1'
            type="email"
            name="email"
            placeholder={signupData.email}
          />
        </div>

        <div>
          <div>Phone</div>
          <input
            className='my-1'
            name="phone"
            placeholder={signupData.phone}
          />
        </div>
        
        <div className='my-1' >
        <p>Resume: {signupData.resumeFile ? signupData.resumeFile.name : 'None'}</p>
        </div>

        <div>
          <div>Enter Portfolio URL (if any)</div>
          <input
            className='my-1'
            name="portfolioUrl"
            placeholder={signupData.portfolioUrl}
          />
        </div>


          <div className='flex flex-col'>
        <label>
          <div>Preferred Job riles</div>
          <input
            className='my-1'
            type="checkbox"
            name="instructionalDesigner"
            checked={signupData.instructionalDesigner || false}

          />
          Instructional Designer
        </label>



        <label>
          <input
            type="checkbox"
            name="softwareEngineer"
            checked={signupData.softwareEngineer || false}

          />
          Software Engineer
        </label>
        <label>
          <input
            type="checkbox"
            name="softwareQualityEngineer"
            checked={signupData.softwareQualityEngineer || false}

          />
          Software Quality Engineer
        </label>


        </div>


        <div>
          <div>If You Are Registering Via A Referral, Please Mention Full Name Of The Employee Who Referred You</div>
          <input
            className='my-4'
            name="referralName"
            placeholder={signupData.referralName}
          />
        </div>


        <label>
        <input
          type="checkbox"
          name="jobUpdates"
          checked={signupData.jobUpdates || false}
        /> 
        Send me job related updates via mail
        </label>
        
      </form>

      <div>
        <img src="https://via.placeholder.com/150" alt="profile" />
      </div>

    </div>
    )
  }

export default PersonalInformation