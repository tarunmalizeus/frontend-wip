import React from 'react';
import { useSignupData } from '../../../utils/SignupContext';
import { useSignupErrorContext } from '../../../utils/SignupErrorContext';

function ProfessionalComponent() {
  const { signupData, updateSignupData } = useSignupData();
  const { 
    expTechError, setExpTechError,
    famTechError, setFamTechError,
  } = useSignupErrorContext();



    let expTechErrorFlag = false;
    let famTechErrorFlag = false;

  const handleCheckboxChange = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    let updatedArray = signupData[name];
    if (value) {
      updatedArray = [...updatedArray, e.target.value];
    } else {
      updatedArray = updatedArray.filter((item) => item !== e.target.value);
    }
    updateSignupData({ [e.target.name]: updatedArray });

    console.log(expTechErrorFlag);

    if(name === "experiencedTech"){
      expTechErrorFlag=!(signupData.experiencedTech.length === 0)
      console.log({expTechErrorFlag});
      console.log({value});
      expTechErrorFlag |=value;
      console.log({expTechErrorFlag});
      if(expTechErrorFlag){
        setExpTechError("");
      } else {
        setExpTechError("Please select at least one technology.");
      }
    } else if(name === "familiarTech"){
      if(signupData.familiarTech.length === 0){
        setFamTechError("Please select at least one technology.");
        famTechErrorFlag = true;
      } else {
        setFamTechError("");
        famTechErrorFlag = false;
      }
    }


  };

  const handleChange = (e) => {
    updateSignupData({ [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e) => {
    updateSignupData({ [e.target.name]: e.target.value });
  };

  return (
    <form className='flex flex-col p-8 bg-white gap-8'>

        <label className='my-3  w-full flex flex-col gap-2'>
          <div className="text-gray-500 text-sm ">Applicant Type*</div>
        
        <div className='space-x-4'>
          <input
            type="radio"
            name="applicantType"
            value="Fresher"
            checked={signupData.applicantType === 'Fresher'}
            onChange={handleRadioChange}
            // className='mr-2'
          />
          <span>Fresher</span>
          <input
            type="radio"
            name="applicantType"
            value="Experienced"
            checked={signupData.applicantType === 'Experienced'}
            onChange={handleRadioChange}
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
        className='my-3 border-b-2 w-1/4'
          type="number"
          name="yearsOfExperience"
          value={signupData.yearsOfExperience}
          onChange={handleChange}
        />
      </label>

      <label>
        <div className="text-gray-500 text-sm ">
        Current CTC (in Rupees)*
        </div>
        <input
        className='my-3 border-b-2 w-1/4'
          type="number"
          name="currentCTC"
          value={signupData.currentCTC}
          onChange={handleChange}
        />
      </label>

      <label>
        <div className="text-gray-500 text-sm ">
        Expected CTC (in Rupees)*
        </div>

        <input
        className='my-3 border-b-2 w-1/4'
          type="number"
          name="expectedCTC"
          value={signupData.expectedCTC}
          onChange={handleChange}
        />
      </label>


      <fieldset         className='my-3 border-b-2 w-1/2 flex flex-col gap-4'>

        <div className="text-gray-500 text-sm ">Select the Technologies You're Experienced In*</div>

        <label>
          <input
            type="checkbox"
            name="experiencedTech"
            value="JavaScript"
            checked={signupData.experiencedTech.includes('JavaScript')}
            onChange={handleCheckboxChange}
            className='mr-2'
          />
          JavaScript
        </label>


        <label>
          <input
            type="checkbox"
            name="experiencedTech"
            value="AngularJS" 
            checked={signupData.experiencedTech.includes('AngularJS')}
            onChange={handleCheckboxChange}
            className='mr-2'
          />
          Angular JS
        </label>



        <label>
          <input
            type="checkbox"
            name="experiencedTech"
            value="React"
            checked={signupData.experiencedTech.includes('React')}
            onChange={handleCheckboxChange}
            className='mr-2'
          />
          React
        </label>

        <label>
          <input
            type="checkbox"
            name="experiencedTech"
            value="NodeJS"
            checked={signupData.experiencedTech.includes('NodeJS')}
            onChange={handleCheckboxChange}
            className='mr-2'
          />
          Node JS
        </label>

        <label>
          <input
            type="checkbox"
            name="experiencedTech"
            value="Others"
            checked={signupData.experiencedTech.includes('Others')}
            onChange={handleCheckboxChange}
            className='mr-2'
          />
          Others
        </label>
        {expTechError && <p className="text-red-500">{expTechError}</p>}
        <label>


                          <div>

              If Others, Please Mention

                          </div>
              <input
                type="text"
                name="otherExperiencedTech"
                value={signupData.otherExperiencedTech}
                onChange={handleChange}
                className='w-full'

                />
                        </label>
      </fieldset>




      <fieldset  className='my-3 border-b-2 w-1/2 flex flex-col gap-4'>
        <div className="text-gray-500 text-sm ">Select the Technologies You're Familiar With*</div>
        <label>
          <input
            type="checkbox"
            name="familiarTech"
            value="JavaScript"
            checked={signupData.familiarTech.includes('JavaScript')}
            onChange={handleCheckboxChange}
            className='mr-2'
          />
          JavaScript
        </label>



        <label>
          <input
            type="checkbox"
            name="familiarTech"
            value="AngularJS" 
            checked={signupData.familiarTech.includes('AngularJS')}
            onChange={handleCheckboxChange}
            className='mr-2'
          />
          Angular JS
        </label>



        <label>
          <input
            type="checkbox"
            name="familiarTech"
            value="React"
            checked={signupData.familiarTech.includes('React')}
            onChange={handleCheckboxChange}
            className='mr-2'
          />
          React
        </label>

        <label>
          <input
            type="checkbox"
            name="familiarTech"
            value="NodeJS"
            checked={signupData.familiarTech.includes('NodeJS')}
            onChange={handleCheckboxChange}
            className='mr-2'
          />
          Node JS
        </label>

        <label>
          <input
            type="checkbox"
            name="familiarTech"
            value="Others"
            checked={signupData.familiarTech.includes('Others')}
            onChange={handleCheckboxChange}
            className='mr-2'
          />
          Others
        </label>


        <label>
                          <div>

              If Others, Please Mention

                          </div>
              <input
                type="text"
                name="otherFamiliarTech"
                value={signupData.otherFamiliarTech}
                onChange={handleChange}
                className='w-full'
                />
                        </label>

      </fieldset>




      <fieldset className='my-3 space-y-2 flex flex-col gap-2'>
        <legend className="text-gray-500 text-sm ">Are You Currently On Notice Period?</legend>
        <div className='space-x-8'>
          <label className='space-x-2'>
            <input
              type="radio"
              name="onNoticePeriod"
              value="Yes"
              checked={signupData.onNoticePeriod === 'Yes'}
              onChange={handleRadioChange}
            />
            <span>Yes</span>
          </label>

          <label className='space-x-2'>
            <input
              type="radio"
              name="onNoticePeriod"
              value="No"
              checked={signupData.onNoticePeriod === 'No'}
              onChange={handleRadioChange}
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
                type="date"
                name="noticePeriodEnd"
                value={signupData.noticePeriodEnd}
                onChange={handleChange}
              />
            </label>


            <label className='border-b-2 w-1/2 flex flex-col gap-2'>
              <div className="text-gray-500 text-sm ">
              How Long is Your Notice Period? (Mention in Months)
              </div>
              <input
                className='w-full'
                type="number"
                name="noticePeriodLength"
                value={signupData.noticePeriodLength}
                onChange={handleChange}
              />
            </label>
          </div>

      
      <div className='flex flex-col gap-2'>

        <legend className="text-gray-500 text-sm ">Have You Appeared for Any Tests in the Past 6 Months?</legend>

        <div className='space-x-8'>
          <label className='space-x-2'>
            <input
              type="radio"
              name="appearedForTests"
              value="Yes"
              checked={signupData.appearedForTests === 'Yes'}
              onChange={handleRadioChange}
            />
            <span>Yes</span>
          </label>

          <label className='space-x-2'>
            <input
              type="radio"
              name="appearedForTests"
              value="No"
              checked={signupData.appearedForTests === 'No'}
              onChange={handleRadioChange}
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
             className='border-b-2 w-1/2'
              type="text"
              name="testNames"
              value={signupData.testNames}
              onChange={handleChange}
            />
          </label>



    </form>
  );
}

export default ProfessionalComponent;
