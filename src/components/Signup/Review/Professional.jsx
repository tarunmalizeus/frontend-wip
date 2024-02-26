import { useSignupData } from "../../../utils/SignupContext"

function Professional() {
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
        className='w-1/4'
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
        className='w-1/4'
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
        className='w-1/4'
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
        <div>
        If Others, Please Mention
        </div>
        <div>
        {signupData.otherExperiencedTech}
        </div>
      </div>


      <div>
         <div>Select the Technologies You're Familiar In*</div>
        {signupData.familiarTech.map((tech, index) => (
          <div key={index}>{tech}</div>
        ))}
      </div>

      <div>
        <div>
        If Others, Please Mention
        </div>
        <div>
        {signupData.otherFamiliarTech}
        </div>
      </div>        


      <fieldset className='my-3 space-y-2'>
        <legend>Are You Currently On Notice Period?</legend>
        <div>{signupData.onNoticePeriod === 'Yes'?'Yes':null}</div>
        <div>{signupData.onNoticePeriod === ''?'':null}</div>

          <div className='flex flex-row justify-between'>

            <label>
              <div>

              If Yes, When Will Your Notice Period End?*
              </div>
              <div>
                {signupData.noticePeriodEnd}
              </div>
            </label>


            <label className='w-1/2'>
              <div>
              How Long is Your Notice Period? (Mention in Months)
              </div>
              <div>
              {signupData.noticePeriodLength}
              </div>
            </label>
          </div>
      </fieldset>
      
      <fieldset>
        <legend>Have You Appeared for Any Tests in the Past 6 Months?</legend>
        <label>
          <div>
            {signupData.appearedForTests=='Yes'?'Yes':null}
          </div>
          <div>
            {signupData.appearedForTests=='No'?'No':null}
          </div>
        </label>

          <label >
            <div>
            If Yes, Please Mention The Test Names
            </div>
            <div>
              {signupData.testNames===''?'-':signupData.testNames}
            </div>
          </label>
  


      </fieldset>    




      {/* <p>{signupData.onNoticePeriod}</p>
      <p>{signupData.noticePeriodEnd}</p>
      <p>{signupData.noticePeriodLength}</p>
      <p>{signupData.appearedForTests}</p>
      <p>{signupData.testNames}</p> */}


        </div>
      </div>
    )
  }

export default Professional