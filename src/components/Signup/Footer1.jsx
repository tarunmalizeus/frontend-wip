import { useNavigate } from 'react-router-dom';
import { useSignupNavigation } from "../../utils/SignupNavigationContext.jsx";


function Footer1() {
    const { isMainSignup1, isMainSignup2, isMainSignup3,isReview } = useSignupNavigation();
    const navigate = useNavigate();
  

    const nextPage = () => {
      if (isMainSignup1) navigate('mainsignup2');
      else if (isMainSignup2) navigate('review');
    };
  

    const prevPage = () => {
      if (isReview) navigate('mainsignup2');
      else if (isMainSignup2) navigate('');
    };
  
    return (
      <div className="flex place-self-center gap-5">
        {!isMainSignup1 && <button  className="px-4 text-xl py-2 bg-[#3FD28B] rounded-lg" onClick={prevPage}>Previous</button>}
        {!isReview && <button  className="px-4 text-xl py-2 bg-[#3FD28B] rounded-lg" onClick={nextPage}>Next</button>}
      </div>
    );
  }
  
  export default Footer1;