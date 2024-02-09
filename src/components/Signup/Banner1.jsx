import { useNavigate } from 'react-router-dom';
import { useSignupNavigation } from "../../utils/SignupNavigationContext.jsx";


function Banner1() {
  const navigate = useNavigate();
  const { isMainSignup1,isReview } = useSignupNavigation();


  const handleBack = () => {
    if (isMainSignup1) {
      navigate('/'); 
    } else {
      navigate(-1); 
    }
  };


  const handleCancel = () => {
    navigate('/'); 
  };

  
  const handleSubmit = () => {
    
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