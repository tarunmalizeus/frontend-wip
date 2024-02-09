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
    <form>
<label>
        Applicant Type*
        <div>
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
        Years Of Experience*
        <input
          type="number"
          name="yearsOfExperience"
          value={signupData.yearsOfExperience}
          onChange={handleChange}
          placeholder="Years Of Experience"
        />
      </label>

      <label>
        Current CTC (in Rupees)*
        <input
          type="number"
          name="currentCTC"
          value={signupData.currentCTC}
          onChange={handleChange}
          placeholder="Current CTC"
        />
      </label>

      <label>
        Expected CTC (in Rupees)*
        <input
          type="number"
          name="expectedCTC"
          value={signupData.expectedCTC}
          onChange={handleChange}
          placeholder="Expected CTC"
        />
      </label>

      <fieldset>
        <legend>Select the Technologies You're Experienced In*</legend>
        <label>
          <input
            type="checkbox"
            name="experiencedTech"
            value="JavaScript"
            // checked={signupData.experiencedTech.includes('JavaScript')}
            onChange={handleCheckboxChange}
          />
          JavaScript
        </label>
      </fieldset>

      <fieldset>
        <legend>Select the Technologies You're Familiar With*</legend>
        <label>
          <input
            type="checkbox"
            name="familiarTech"
            value="JavaScript"
            // checked={signupData.familiarTech.includes('JavaScript')}
            onChange={handleCheckboxChange}
          />
          JavaScript
        </label>
        {/* Add other checkboxes for different technologies */}
      </fieldset>
      <fieldset>
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
          <div>
            <label>
              When Will Your Notice Period End?*
              <input
                type="date"
                name="noticePeriodEnd"
                value={signupData.noticePeriodEnd}
                onChange={handleChange}
              />
            </label>
            <label>
              How Long is Your Notice Period? (in Months)*
              <input
                type="number"
                name="noticePeriodLength"
                value={signupData.noticePeriodLength}
                onChange={handleChange}
                placeholder="Length of Notice Period"
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
      </fieldset>    

    </form>
  );
}

export default Professional;
