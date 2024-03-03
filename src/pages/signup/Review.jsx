
import React from 'react';
import Personal from '../../components/Signup/Review/Personal';
import { Link } from 'react-router-dom';
import Education from '../../components/Signup/Review/Education';
import Professional from '../../components/Signup/Review/Professional';

function Review() {

  return (
    <div>
        <div className='flex flex-row justify-between m-4'>
          <h1>Personal Information</h1>
          <button><Link to="/signup">Edit</Link></button>
        </div>

        <Personal/>

        <div className='flex flex-row justify-between m-4'>
          <h1>Qualifications</h1>
          <button><Link to="/signup/mainsignup2">Edit</Link></button>
        </div>

        <div className='space-y-4'>
          <Education/>
          <Professional/>
        </div>

    </div>
  );
  }

export default Review