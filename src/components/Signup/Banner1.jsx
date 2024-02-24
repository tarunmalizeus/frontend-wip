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
            firstName: "John",
            lastName: "Doe",
            phone: "1234567890",
            portfolioUrl: "https://example.com/portfolio",
            jobUpdates: false,
            referralName: "Jane Smith",

            email: "7@example.com",
            password: "password123",
    
            imageFile: "path/to/image.jpg",
            resumeFile: "path/to/resume.pdf",

            instructionalDesigner: true,
            softwareEngineer: false,
            softwareQualityEngineer: true,


            // percentage: 80,
            // yearOfPassing: 2019,
            // qualification: "Bachelor of Technology",
            // stream: "Computer Science",
            // college: "Stanford",
            // otherCollege: "",
            // collegeLocation: "City",

          

            percentage: parseFloat(signupData.percentage),
            yearOfPassing: parseInt(signupData.yearOfPassing),
            qualification: signupData.qualification,
            stream: signupData.stream,
            college: signupData.college,
            otherCollege: signupData.otherCollege,
            collegeLocation: signupData.collegeLocation,
            


            applicantType: "Fresher",
            yearsOfExperience: 0,
            currentCTC: 0,
            expectedCTC: 50000,
            onNoticePeriod: "Yes",
            noticePeriodEnd: "2024-03-01",
            noticePeriodLength: 30,
            appearedForTests: "Yes",
            testNames: "Technical Test, Aptitude Test",


            experiencedTech: ["JavaScript", "React"],
            otherExperiencedTech: "",
            familiarTech: ["HTML", "CSS"],
            otherFamiliarTech: "",

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