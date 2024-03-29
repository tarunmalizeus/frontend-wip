import { useNavigate } from 'react-router-dom';
import { useSignupNavigation } from "../../utils/SignupNavigationContext.jsx";
import { useSignupData } from '../../utils/SignupContext.jsx';
import { useSignupErrorContext } from '../../utils/SignupErrorContext.jsx';


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
      roleError, setRoleError,
      collegeLocationError, setCollegeLocationError,
      expTechError, setExpTechError,
      famTechError, setFamTechError,
    } = useSignupErrorContext();

  
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
          setRoleError(!(signupData.softwareEngineer || signupData.softwareQualityEngineer || signupData.instructionalDesigner) ? "Please select at least one role." : "");
          return;
        }




        navigate('mainsignup2');
      } 
      else if (isMainSignup2){
        if(collegeLocationError !== "" || expTechError !== "" || famTechError !== ""){
          alert("Please Correct the errors in the form.");
          return;
        }
          if(signupData.percentage === "" || signupData.yearOfPassing === "" || signupData.qualification === "" || signupData.college === "" || signupData.stream === "" || signupData.collegeLocation === ""
          || signupData.experiencedTech.length === 0 || signupData.familiarTech.length === 0
          ){
            alert("Please fill all the fields");
            setCollegeLocationError(signupData.collegeLocation === "" ? "Please enter a valid location." : "");
            setExpTechError(signupData.experiencedTech.length === 0 ? "Please select at least one option." : "");
            setFamTechError(signupData.familiarTech.length === 0 ? "Please select at least one option." : "");
            return;
          }


        navigate('review');
      } 
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