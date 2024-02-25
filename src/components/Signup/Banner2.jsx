import { useSignupNavigation } from "../../utils/SignupNavigationContext.jsx";
import { useNavigate } from 'react-router-dom';


function Banner2() {
  const navigate = useNavigate();
  const { isMainSignup1,isMainSignup2 ,isReview } = useSignupNavigation();

  function setPage(page){
    navigate(page)
  }


    return (
      <>
        <div className="bg-white m-2 mx-4 p-4 flex justify-between px-12"> 

        <div
        onClick={() => setPage('mainsignup2')}
          className="flex gap-2 justify-around items-center cursor-pointer"
        >
       <div
            className= {`flex aspect-square items-center text-center align-middle px-5 py-2.5 ${isMainSignup1? `bg-[#3FD28B]`: `bg-[#757575]` } rounded-full text-xl text-slate-900`}
          >
            1
          </div>

          <div className="text-lg font-bold"> Personal Information</div>
        </div> 





        </div>

      </>
    )
  }

export default Banner2