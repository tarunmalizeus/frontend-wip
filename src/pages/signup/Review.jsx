
import React from 'react';
import PersonalInformation from '../../components/signup/Review/PersonalInformation';
import { Link } from 'react-router-dom';
import EducationalQualification from '../../components/signup/Review/EducationalQualification';
import ProfessionalQualification from '../../components/signup/Review/ProfessionalQualification';

function Review() {

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

    </div>
  );
  }

export default Review