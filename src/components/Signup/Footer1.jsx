import { useNavigate } from 'react-router-dom';
import { useSignupNavigation } from "../../utils/SignupNavigationContext.jsx";
import { useSignupData } from '../../utils/SignupContext';
import { usePage1ErrorContext } from '../../utils/Page1ErrorContext';


function Footer1() {
    const { isMainSignup1, isMainSignup2, isMainSignup3,isReview } = useSignupNavigation();
    const navigate = useNavigate();


    const {firstNameError, setFirstNameError} = usePage1ErrorContext();

  
    const { signupData, updateSignupData } = useSignupData();

    const nextPage = () => {
      if (isMainSignup1){
        if(signupData.firstName === "" || signupData.lastName === "" || signupData.email === "" || signupData.password === "" || signupData.phone === "" || signupData.resumeFile === null || signupData.imageFile === null || signupData.experiencedTech.length === 0 || signupData.familiarTech.length === 0){
          alert("Please fill all the fields");
          setFirstNameError(signupData.firstName === "" ? "Please enter a valid name." : "");
          return;
        }
        navigate('mainsignup2');
      } 
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