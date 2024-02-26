import { useNavigate } from 'react-router-dom';
import { useSignupNavigation } from "../../utils/SignupNavigationContext.jsx";
import { useSignupData } from '../../utils/SignupContext.jsx';
import { useMutation, gql } from '@apollo/client';
import BackButton from '../../assets/arrow_upward_black_24dp.svg';


const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      user_id
    }
  }
`;

function Banner1() {
  const { signupData} = useSignupData();
  const navigate = useNavigate();
  const { isMainSignup1,isReview } = useSignupNavigation();
  const [createUserMutation, { data, loading, error }] = useMutation(CREATE_USER);


  

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

  
  const handleSubmit = async () => {
    try {
      const result = await createUserMutation({
        variables: {
          input: {
            //login
            email: signupData.email,
            password: signupData.password,

            firstName: signupData.firstName,
            lastName: signupData.lastName,
            phone: signupData.phone,
            portfolioUrl: signupData.portfolioUrl,
            jobUpdates: signupData.jobUpdates,
            referralName: signupData.referralName,
            imageFile: signupData.imageFile,
            resumeFile: signupData.resumeFile,
            instructionalDesigner: signupData.instructionalDesigner,
            softwareEngineer: signupData.softwareEngineer,
            softwareQualityEngineer: signupData.softwareQualityEngineer,
            percentage: parseFloat(signupData.percentage),
            yearOfPassing: parseInt(signupData.yearOfPassing),
            qualification: signupData.qualification,
            stream: signupData.stream,
            college: signupData.college,
            otherCollege: signupData.otherCollege,
            collegeLocation: signupData.collegeLocation,
            applicantType: signupData.applicantType,
            yearsOfExperience: parseInt(signupData.yearsOfExperience),
            currentCTC: parseInt(signupData.currentCTC),
            expectedCTC: parseInt(signupData.expectedCTC),
            experiencedTech: signupData.experiencedTech,
            otherExperiencedTech: signupData.otherExperiencedTech,
            familiarTech: signupData.familiarTech,
            otherFamiliarTech: signupData.otherFamiliarTech,
            onNoticePeriod: signupData.onNoticePeriod,
            noticePeriodEnd: signupData.noticePeriodEnd,
            noticePeriodLength: parseInt(signupData.noticePeriodLength),
            appearedForTests: signupData.appearedForTests,
            testNames: signupData.testNames,

          }
        }
      });
    } catch (error) {
    }
  };

  return (
    // <div className='flex flex-row justify-between p-4'>
    <div className="flex justify-between items-center p-4 px-10  bg-[#3C4E62] text-zinc-100 font-bold text-lg">

      <button onClick={handleBack}>
          <img
            className="-rotate-90 cursor-pointer"
            src={BackButton}
            alt=""
            width={30}
          />
        </button>

      <div> Create An Account</div>

      <div className="flex gap-4">
      <button onClick={handleCancel} className="bg-[#3FD28B] px-4 py-1 rounded-md text-slate-900">
            CANCEL
          </button>

        <button
          className={`px-4 py-1 rounded-md text-slate-900 ${isReview ? 'bg-[#3FD28B]' : 'bg-[#3FD28B88] cursor-not-allowed'}`}
          onClick={isReview ? handleSubmit : undefined}
          disabled={!isReview}
        >
  Submit
</button>


      </div>
    </div>
  );
}

export default Banner1;