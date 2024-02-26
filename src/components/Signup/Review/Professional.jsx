import { useSignupData } from "../../../utils/SignupContext"

function Professional() {
  const { signupData } = useSignupData();
  return (
    <div>
      <h1 className="bg-accordianblue p-4 mx-4">Professional Qualification</h1>


      <form className='flex flex-col p-8 mx-4 bg-white gap-8'>

        <label className='my-3   flex flex-col gap-2  w-full'>
          <div className="text-gray-500 text-sm ">Applicant Type*</div>
          <div className='space-x-4 flex flex-row w-full'>
            <input
              disabled
              type="radio"
              name="applicantType"
              value="Fresher"
              checked={signupData.applicantType === 'Fresher'}
            // className='mr-2'
            />
            <span>Fresher</span>
            <input
              disabled
              type="radio"
              name="applicantType"
              value="Experienced"
              checked={signupData.applicantType === 'Experienced'}
            // className='mr-2'
            />
            <span>
              Experienced
            </span>

          </div>
        </label>



        <label>
          <div className="text-gray-500 text-sm ">
            Years Of Experience*
          </div>
          <input
            disabled
            className='my-3  w-1/4 bg-white'
            type="number"
            name="yearsOfExperience"
            value={signupData.yearsOfExperience}
          />
        </label>

        <label>
          <div className="text-gray-500 text-sm ">
            Current CTC (in Rupees)*
          </div>
          <input
            disabled
            className='my-3  w-1/4  bg-white'  
            type="number"
            name="currentCTC"
            value={signupData.currentCTC}
          />
        </label>

        <label>
          <div className="text-gray-500 text-sm ">
            Expected CTC (in Rupees)*
          </div>

          <input
            disabled
            className='my-3  w-1/4  bg-white'
            type="number"
            name="expectedCTC"
            value={signupData.expectedCTC}
          />
        </label>


        <fieldset className='my-3  w-1/2 flex flex-col gap-4'>

          <div className="text-gray-500 text-sm ">Select the Technologies You're Experienced In*</div>

          <label>
            <input
              disabled
              type="checkbox"
              name="experiencedTech"
              value="JavaScript"
              checked={signupData.experiencedTech.includes('JavaScript')}

              className='mr-2'
            />
            JavaScript
          </label>


          <label>
            <input
              disabled
              type="checkbox"
              name="experiencedTech"
              value="AngularJS"
              checked={signupData.experiencedTech.includes('AngularJS')}

              className='mr-2'
            />
            Angular JS
          </label>



          <label>
            <input
              disabled
              type="checkbox"
              name="experiencedTech"
              value="React"
              checked={signupData.experiencedTech.includes('React')}

              className='mr-2'
            />
            React
          </label>

          <label>
            <input
              disabled
              type="checkbox"
              name="experiencedTech"
              value="NodeJS"
              checked={signupData.experiencedTech.includes('NodeJS')}

              className='mr-2'
            />
            Node JS
          </label>

          <label>
            <input
              disabled
              type="checkbox"
              name="experiencedTech"
              value="Others"
              checked={signupData.experiencedTech.includes('Others')}

              className='mr-2'
            />
            Others
          </label>


          <label>
            <div>

              If Others, Please Mention

            </div>
            <input
              disabled
              type="text"
              name="otherExperiencedTech"
              value={signupData.otherExperiencedTech?signupData.otherExperiencedTech:'-'}

              className='w-full bg-white'

            />
          </label>
        </fieldset>




        <fieldset className='my-3  w-1/2 flex flex-col gap-4'>
          <div className="text-gray-500 text-sm ">Select the Technologies You're Familiar With*</div>
          <label>
            <input
              disabled
              type="checkbox"
              name="familiarTech"
              value="JavaScript"
              checked={signupData.familiarTech.includes('JavaScript')}

              className='mr-2'
            />
            JavaScript
          </label>



          <label>
            <input
              disabled
              type="checkbox"
              name="familiarTech"
              value="AngularJS"
              checked={signupData.familiarTech.includes('AngularJS')}

              className='mr-2'
            />
            Angular JS
          </label>



          <label>
            <input
              disabled
              type="checkbox"
              name="familiarTech"
              value="React"
              checked={signupData.familiarTech.includes('React')}

              className='mr-2'
            />
            React
          </label>

          <label>
            <input
              disabled
              type="checkbox"
              name="familiarTech"
              value="NodeJS"
              checked={signupData.familiarTech.includes('NodeJS')}

              className='mr-2'
            />
            Node JS
          </label>

          <label>
            <input
              disabled
              type="checkbox"
              name="familiarTech"
              value="Others"
              checked={signupData.familiarTech.includes('Others')}

              className='mr-2'
            />
            Others
          </label>


          <label>
            <div>

              If Others, Please Mention

            </div>
            <input
              disabled
              type="text"
              name="otherFamiliarTech"
              value={signupData.otherFamiliarTech?signupData.otherFamiliarTech:'-'}

              className='w-full bg-white'
            />
          </label>

        </fieldset>




        <fieldset className='my-3 space-y-2 flex flex-col gap-2'>
          <legend className="text-gray-500 text-sm ">Are You Currently On Notice Period?</legend>
          <div className='space-x-8'>
            <label className='space-x-2'>
              <input
                disabled
                type="radio"
                name="onNoticePeriod"
                value="Yes"
                checked={signupData.onNoticePeriod === 'Yes'}

              />
              <span>Yes</span>
            </label>

            <label className='space-x-2'>
              <input
                disabled
                type="radio"
                name="onNoticePeriod"
                value="No"
                checked={signupData.onNoticePeriod === 'No'}

              />
              <span>No</span>
            </label>

          </div>

        </fieldset>

        <div className='flex flex-row justify-between'>

          <label className='flex flex-col gap-2'>
            <div className="text-gray-500 text-sm ">

              If Yes, When Will Your Notice Period End?*
            </div>
            <input
              disabled
              type="date"
              name="noticePeriodEnd"
              value={signupData.noticePeriodEnd}
              className="bg-white"
            />
          </label>


          <label className=' w-1/2 flex flex-col gap-2'>
            <div className="text-gray-500 text-sm ">
              How Long is Your Notice Period? (Mention in Months)
            </div>
            <input
              disabled
              className='w-full bg-white'
              type="number"
              name="noticePeriodLength"
              value={signupData.noticePeriodLength}

            />
          </label>
        </div>


        <div className='flex flex-col gap-2'>

          <legend className="text-gray-500 text-sm ">Have You Appeared for Any Tests in the Past 6 Months?</legend>

          <div className='space-x-8'>
            <label className='space-x-2'>
              <input
                disabled
                type="radio"
                name="appearedForTests"
                value="Yes"
                checked={signupData.appearedForTests === 'Yes'}

              />
              <span>Yes</span>
            </label>

            <label className='space-x-2'>
              <input
                disabled
                type="radio"
                name="appearedForTests"
                value="No"
                checked={signupData.appearedForTests === 'No'}

              />
              <span>No</span>
            </label>
          </div>

        </div>

        <label >
          <div className="text-gray-500 text-sm ">
            If Yes, Please Mention The Test Names
          </div>
          <input
            disabled
            className=' w-1/2 bg-white'
            type="text"
            name="testNames"
            value={signupData.testNames?signupData.testNames:'-'}

          />
        </label>



      </form>






      {/* <div className='flex flex-col p-4 mx-4 bg-white space-y-4'>
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
        disabled
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
        disabled
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
        disabled
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


        </div> */}
    </div>


  )
}

export default Professional