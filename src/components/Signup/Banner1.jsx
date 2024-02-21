import { useNavigate } from 'react-router-dom';
import { useSignupNavigation } from "../../utils/SignupNavigationContext.jsx";
import { useSignupData } from '../../utils/SignupContext.jsx';
import { useMutation, gql } from '@apollo/client';


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
            firstName: "John",
            lastName: "Doe",
            phone: "1234567890",
            portfolioUrl: "https://example.com/portfolio",
            jobUpdates: false,
            referralName: "Jane Smith",

            familiarTech: ["HTML", "CSS"],
            otherExperiencedTech: "",

            email: "6@example.com",
            password: "password123",
    
            imageFile: "path/to/image.jpg",
            resumeFile: "path/to/resume.pdf",

            instructionalDesigner: true,
            softwareEngineer: false,
            softwareQualityEngineer: true,

            //education
            percentage: 80,
            yearOfPassing: 2019,
            qualification: "B.Tech",
            stream: "Computer Science",
            college: "ABC University",
            otherCollege: "",
            collegeLocation: "City",

            applicantType: "Fresher",
            yearsOfExperience: 0,
            currentCTC: 0,
            expectedCTC: 50000,
            experiencedTech: ["JavaScript", "React"],

            otherFamiliarTech: "",
            onNoticePeriod: "Yes",
            noticePeriodEnd: "2024-03-01",
            noticePeriodLength: 30,
            appearedForTests: "Yes",
            testNames: "Technical Test, Aptitude Test"
          }
        }
      });
      // console.log(result);
    } catch (error) {
      // console.error(error);
    }
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