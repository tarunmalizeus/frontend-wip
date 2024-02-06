import { useNavigate } from 'react-router-dom';
import { useSignupNavigation } from "../../utils/SignupNavigationContext.jsx";


function Footer1() {
    const { isMainSignup1, isMainSignup2, isMainSignup3,isReview } = useSignupNavigation();
    const navigate = useNavigate();
  
    // Function to navigate to the next page
    const nextPage = () => {
      if (isMainSignup1) navigate('mainsignup2');
      else if (isMainSignup2) navigate('mainsignup3');
      else if (isMainSignup3) navigate('review');
    };
  
    // Function to navigate to the previous page
    const prevPage = () => {
      if (isReview) navigate('mainsignup3');
      else if (isMainSignup3) navigate('mainsignup2');
      else if (isMainSignup2) navigate('');
    };
  
    return (
      <div>
        {!isMainSignup1 && <button onClick={prevPage}>Previous</button>}
        {!isReview && <button onClick={nextPage}>Next</button>}
      </div>
    );
  }
  
  export default Footer1;