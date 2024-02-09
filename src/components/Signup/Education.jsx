import React from 'react';
import { useSignupData } from '../../utils/SignupContext';

function Education() {
  const { signupData, updateSignupData } = useSignupData();

  const handleChange = (e) => {
    updateSignupData({ [e.target.name]: e.target.value });
  };

  return (
    <form>
      <label>
        Aggregate Percentage*
        <input
          type="number"
          name="percentage"
          value={signupData.percentage}
          onChange={handleChange}
          placeholder="Aggregate Percentage"
        />
      </label>
      <label>
        Year Of Passing*
        <select name="yearOfPassing" value={signupData.yearOfPassing} onChange={handleChange}>
          <option value="2020">2020</option>
          {/* Add more options for other years */}
        </select>
      </label>
      <label>
        Qualification*
        <select name="qualification" value={signupData.qualification} onChange={handleChange}>
          <option value="B.Tech">Bachelor in Technology (B.Tech)</option>
          {/* Add more options for other qualifications */}
        </select>
      </label>
      <label>
        Stream*
        <select name="stream" value={signupData.stream} onChange={handleChange}>
          <option value="Information Technology">Information Technology</option>
          {/* Add more options for other streams */}
        </select>
      </label>
      <label>
        College*
        <select name="college" value={signupData.college} onChange={handleChange}>
          <option value="PIT">Pune Institute of Technology (PIT)</option>
          {/* Add more options for other colleges */}
        </select>
      </label>
      <label>
        If Others, Please Enter Your College Name
        <input
          type="text"
          name="otherCollege"
          value={signupData.otherCollege}
          onChange={handleChange}
          placeholder="Other College Name"
        />
      </label>
      <label>
        Where Is Your College Located?*
        <input
          type="text"
          name="collegeLocation"
          value={signupData.collegeLocation}
          onChange={handleChange}
          placeholder="College Location"
        />
      </label>
    </form>
  );
}

export default Education;
