
import React from 'react';
import { useSignupData } from '../../utils/SignupContext.jsx';
import PersonalInformation from '../../components/signup/Review/PersonalInformation';
import { Link } from 'react-router-dom';
import EducationalQualification from '../../components/signup/Review/EducationalQualification';
import ProfessionalQualification from '../../components/signup/Review/ProfessionalQualification';

function Review() {
  const { signupData} = useSignupData();

  return (
    <div>
        <div className='flex flex-row justify-between m-4'>
          <h1>Personal Information</h1>
          <button><Link to="/signup">Edit</Link></button>
        </div>

        <PersonalInformation/>

        <div className='flex flex-row justify-between m-4'>
          <h1>Qualification</h1>
          <button><Link to="/signup/mainsignup2">Edit</Link></button>
        </div>

        <div className='space-y-4'>
          <EducationalQualification/>
          <ProfessionalQualification/>
        </div>



      {/* <h1>Review</h1>
      <p>{signupData.firstName}</p>
      <p>{signupData.lastName}</p>
      <p>{signupData.email}</p>
      <p>{signupData.phone}</p>
      <p>{signupData.portfolioUrl}</p>
      <p>Resume: {signupData.resumeFile ? signupData.resumeFile.name : 'None'}</p>
      {signupData.instructionalDesigner ? <p>Instructional Designer</p> : null}
      {signupData.softwareEngineer ? <p>Software Engineer</p> : null}
      {signupData.softwareQualityEngineer ? <p>Software Quality Engineer</p> : null}
      {signupData.jobUpdates ? <p>Job Updates: Yes</p> : <p>Job Updates: No</p>}

      <p>{signupData.jobUpdates}</p>
      <p>{signupData.referralName}</p> 
      <p>{signupData.percentage}</p>

      <p>{signupData.yearOfPassing}</p>
      <p>{signupData.qualification}</p>
      <p>{signupData.stream}</p>
      <p>{signupData.college}</p>

      <p>{signupData.otherCollege}</p>
      <p>{signupData.collegeLocation}</p>


      <p>{signupData.applicantType}</p>
      <p>{signupData.yearsOfExperience}</p>
      <p>{signupData.currentCtc}</p>
      <p>{signupData.expectedCtc}</p>
      <p>{signupData.experiencedTech}</p>
      <p>{signupData.familiarTech}</p>
      <p>{signupData.otherExperiencedTech}</p>
      <p>{signupData.otherFamiliarTech}</p>
      <p>{signupData.onNoticePeriod}</p>
      <p>{signupData.noticePeriodEnd}</p>
      <p>{signupData.noticePeriodLength}</p>
      <p>{signupData.appearedForTests}</p>
      <p>{signupData.testNames}</p>
      <p>End</p> */}
    </div>
  );
  }

export default Review