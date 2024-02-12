import React from 'react';
import { useSignupData } from '../../utils/SignupContext';

function Professional() {
  const { signupData, updateSignupData } = useSignupData();

  const handleCheckboxChange = (e) => {
    // For handling checkbox groups, store values in an array
    let updatedArray = signupData[e.target.name];
    if (e.target.checked) {
      updatedArray = [...updatedArray, e.target.value];
    } else {
      updatedArray = updatedArray.filter((item) => item !== e.target.value);
    }
    updateSignupData({ [e.target.name]: updatedArray });
  };

  const handleChange = (e) => {
    updateSignupData({ [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e) => {
    updateSignupData({ [e.target.name]: e.target.value });
  };

  return (
    <form className='flex flex-col p-4 bg-white'>

        <label className='my-3  w-1/4'>
        Applicant Type*
        <div className='space-x-4'>
          <input
            type="radio"
            name="applicantType"
            value="Fresher"
            checked={signupData.applicantType === 'Fresher'}
            onChange={handleRadioChange}
          />
          Fresher


          <input
            type="radio"
            name="applicantType"
            value="Experienced"
            checked={signupData.applicantType === 'Experienced'}
            onChange={handleRadioChange}
          />
          Experienced


        </div>
      </label>

      <label>
        <div>
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
        <div>
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
        <div>
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

      <fieldset         className='my-3 border-b-2 w-1/2 flex flex-col'>
        <legend>Select the Technologies You're Experienced In*</legend>
        <label>
          <input
            type="checkbox"
            name="experiencedTech"
            value="JavaScript"
            checked={signupData.experiencedTech.includes('JavaScript')}
            onChange={handleCheckboxChange}
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
                value={signupData.otherCollege}
                onChange={handleChange}
                />
                        </label>
      </fieldset>




      <fieldset  className='my-3 border-b-2 w-1/2 flex flex-col'>
        <legend>Select the Technologies You're Familiar With*</legend>
        <label>
          <input
            type="checkbox"
            name="familiarTech"
            value="JavaScript"
            checked={signupData.familiarTech.includes('JavaScript')}
            onChange={handleCheckboxChange}
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
                value={signupData.otherCollege}
                onChange={handleChange}
                />
                        </label>

      </fieldset>




      <fieldset className='my-3 space-y-2'>
        <legend>Are You Currently On Notice Period?</legend>
        <label>
          <input
            type="radio"
            name="onNoticePeriod"
            value="Yes"
            checked={signupData.onNoticePeriod === 'Yes'}
            onChange={handleRadioChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="onNoticePeriod"
            value="No"
            checked={signupData.onNoticePeriod === 'No'}
            onChange={handleRadioChange}
          />
          No
        </label>
        {signupData.onNoticePeriod === 'Yes' && (
          <div className='flex flex-row justify-between'>

            <label>
              <div>

              If Yes, When Will Your Notice Period End?*
              </div>
              <input
                type="date"
                name="noticePeriodEnd"
                value={signupData.noticePeriodEnd}
                onChange={handleChange}
              />
            </label>


            <label className='border-b-2 w-1/2'>
              <div>
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
        )}
      </fieldset>
      
      <fieldset>
        <legend>Have You Appeared for Any Tests in the Past 6 Months?</legend>
        <label>
          <input
            type="radio"
            name="appearedForTests"
            value="Yes"
            checked={signupData.appearedForTests === 'Yes'}
            onChange={handleRadioChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="appearedForTests"
            value="No"
            checked={signupData.appearedForTests === 'No'}
            onChange={handleRadioChange}
          />
          No
        </label>


        {signupData.appearedForTests === 'Yes' && (
          <label >
            <div>
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
        )}


      </fieldset>    

    </form>
  );
}

export default Professional;
