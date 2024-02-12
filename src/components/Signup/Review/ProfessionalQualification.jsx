import { useSignupData } from "../../../utils/SignupContext"

function ProfessionalQualification() {
  const { signupData} = useSignupData();
    return (
      <div>
        <h1 className="bg-accordianblue p-4 mx-4">Professional Qualification</h1>
        <div className='flex flex-col p-4 mx-4 bg-white space-y-4'>
        <label className='my-3  w-1/4 space-y-1'>
          <div>
            Applicant Type*
          </div>
          <div>
            {signupData.applicantType === 'Fresher'? 'Fresher':null}
          </div>

          <div> 
          {signupData.applicantType === 'Experienced'? 'Experienced':null}
          </div>
      </label>

      <label>
        <div>
        Years Of Experience*
        </div>
        <input
        className='my-3  w-1/4'
          type="number"
          name="yearsOfExperience"
          value={signupData.yearsOfExperience}
        />
      </label>

      <label>
        <div>
        Current CTC (in Rupees)*
        </div>
        <input
        className='my-3  w-1/4'
          type="number"
          name="currentCTC"
          value={signupData.currentCTC}
        />
      </label>

      <label>
        <div>
        Expected CTC (in Rupees)*
        </div>

        <input
        className='my-3  w-1/4'
          type="number"
          name="expectedCTC"
          value={signupData.expectedCTC}
        />
      </label>


      <div>
         <div>Select the Technologies You're Experienced In*</div>
        {signupData.experiencedTech.map((tech, index) => (
          <div key={index}>{tech}</div>
        ))}
      </div>

      <div>
         <div>Select the Technologies You're Familiar In*</div>
        {signupData.experiencedTech.map((tech, index) => (
          <div key={index}>{tech}</div>
        ))}
      </div>

        </div>
      </div>
    )
  }

export default ProfessionalQualification