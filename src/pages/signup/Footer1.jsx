import { useNavigate, useLocation } from 'react-router-dom';

function Footer1() {
    const navigate = useNavigate();
    const location = useLocation();
  
    // Determine the current step based on the location
    let isMainSignup1=false, isMainSignup2=false, isMainSignup3=false, isReview=false;
    if(location.pathname.includes('mainsignup2')) isMainSignup2=true;
    else if(location.pathname.includes('mainsignup3')) isMainSignup3=true;
    else if(location.pathname.includes('review')) isReview=true;
    else isMainSignup1=true;

  
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