
import React from 'react';
import Personal from '../../components/signup/Review/Personal';
import { Link } from 'react-router-dom';
import Education from '../../components/signup/Review/Education';
import Professional from '../../components/signup/Review/Professional';

function Review() {

  return (
    <div>
        <div className='flex flex-row justify-between m-4'>
          <h1>Personal Information</h1>
          <button><Link to="/signup">Edit</Link></button>
        </div>

        <Personal/>

        <div className='flex flex-row justify-between m-4'>
          <h1>Qualification</h1>
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