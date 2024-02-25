import { useNavigate } from 'react-router-dom';
import { useSignupNavigation } from "../../utils/SignupNavigationContext.jsx";
import { useSignupData } from '../../utils/SignupContext';
import { usePage1ErrorContext } from '../../utils/Page1ErrorContext';


function Footer1() {
    const { isMainSignup1, isMainSignup2, isMainSignup3,isReview } = useSignupNavigation();
    const navigate = useNavigate();

    const {
      firstNameError, setFirstNameError,
      lastNameError, setLastNameError,
      passwordError, setPasswordError,
      cpasswordError, setCpasswordError,
      emailError, setEmailError,
      phoneError, setPhoneError,
      resumeError, setResumeError,
      pfpError, setPfpError,
      roleError, setRoleError
    } = usePage1ErrorContext();

  
    const { signupData, updateSignupData } = useSignupData();

    const nextPage = () => {
      if (isMainSignup1){
        
        if(firstNameError !== "" || lastNameError !== "" || emailError !== "" || passwordError !== "" || cpasswordError !== "" || phoneError !== "" || resumeError !== "" || pfpError !== "" || roleError !== ""){
          alert("Please Correct the errors in the form.");
          return;
        }
        
        if(signupData.firstName === "" || signupData.lastName === "" || signupData.email === "" || signupData.password === "" || signupData.phone === "" || signupData.resumeFile === null || signupData.imageFile === null || (!signupData.instructionalDesigner && !signupData.softwareEngineer && !signupData.softwareQualityEngineer)){
          alert("Please fill all the fields");
          setFirstNameError(signupData.firstName === "" ? "Please enter a valid name." : "");
          setLastNameError(signupData.lastName === "" ? "Please enter a valid name." : "");
          setEmailError(signupData.email === "" ? "Please enter a valid email." : "");
          setPasswordError(signupData.password === "" ? "Please enter a valid password." : "");
          setCpasswordError(signupData.cpassword === "" ? "Please enter a valid password." : "");
          setPhoneError(signupData.phone === "" ? "Please enter a valid phone number." : "");
          setResumeError(signupData.resumeFile === null ? "Please upload a resume." : "");
          setPfpError(signupData.imageFile === null ? "Please upload a profile picture." : "");
          setRoleError(signupData.experiencedTech.length === 0 ? "Please select at least one role." : "");
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