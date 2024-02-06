import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Banner1() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the current step based on the location
  const isMainSignup1 = location.pathname.includes('mainsignup1');
  const isReview = location.pathname.includes('review');

  // Function to navigate back or to the landing page
  const handleBack = () => {
    if (isMainSignup1) {
      navigate('/'); // Navigate to the landing page if on MainSignup1
    } else {
      navigate(-1); // Go back to the previous page otherwise
    }
  };

  // Function to cancel and navigate to the landing page
  const handleCancel = () => {
    navigate('/'); // Navigate to the landing page
  };

  // Function to handle submit, which could be navigating to a confirmation page
  const handleSubmit = () => {
    // navigate('/confirmation'); // Example navigation after submit
    console.log("Backend call to submit data")
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleCancel}>Cancel</button>
      {isReview && <button onClick={handleSubmit}>Submit</button>}
    </div>
  );
}

export default Banner1;