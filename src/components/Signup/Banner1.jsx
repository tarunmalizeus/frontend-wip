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


  //clg the ducation data
  console.log(signupData.percentage);
  console.log(signupData.yearOfPassing);
  console.log(signupData.qualification);
  console.log(signupData.stream);
  console.log(signupData.college);
  console.log(signupData.otherCollege);
  console.log(signupData.collegeLocation);

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
            email: "18@example.com",
            password: "password123",


            //user details
            firstName: "John",
            lastName: "Doe",
            phone: "1234567890",
            portfolioUrl: "https://example.com/portfolio",
            jobUpdates: false,
            referralName: "Jane Smith",

            imageFile: "path/to/image.jpg",
            resumeFile: "path/to/resume.pdf",

            instructionalDesigner: true,
            softwareEngineer: false,
            softwareQualityEngineer: true,


            //Education
            percentage: 80,
            yearOfPassing: 2019,
            qualification: "Bachelor of Technology",
            stream: "Computer Science",
            college: "Stanford",
            otherCollege: "",
            collegeLocation: "City",

            // percentage: parseFloat(signupData.percentage),
            // yearOfPassing: parseInt(signupData.yearOfPassing),
            // qualification: signupData.qualification,
            // stream: signupData.stream,
            // college: signupData.college,
            // otherCollege: signupData.otherCollege,
            // collegeLocation: signupData.collegeLocation,
            

            applicantType: "Fresher",
            yearsOfExperience: 0,
            currentCTC: 0,
            expectedCTC: 50000,
                        
            experiencedTech: ["JavaScript", "React"],
            otherExperiencedTech: "",
            familiarTech: ["JavaScript", "React"],
            otherFamiliarTech: "",
            

            // experiencedTech: signupData.experiencedTech,
            // otherExperiencedTech: "",
            // familiarTech: signupData.familiarTech,
            // otherFamiliarTech: "",


            onNoticePeriod: "Yes",
            noticePeriodEnd: "2024-03-01",
            noticePeriodLength: 30,
            appearedForTests: "Yes",
            testNames: "Technical Test, Aptitude Test",
          }
        }
      });
      // console.log(result);
    } catch (error) {
      // console.error(error);
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