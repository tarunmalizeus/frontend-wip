import { useNavigate } from 'react-router-dom';
import { useSignupNavigation } from "../../utils/SignupNavigationContext.jsx";


function Banner1() {
  const navigate = useNavigate();
  const { isMainSignup1,isReview } = useSignupNavigation();

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
    <div className='flex flex-row justify-between p-4'>
      <button onClick={handleBack}>Back</button>
      <div> Create An Account</div>
      <div>
        <button onClick={handleCancel}>Cancel</button>
        {isReview && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
}

export default Banner1;