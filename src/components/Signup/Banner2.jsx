import { useSignupNavigation } from "../../utils/SignupNavigationContext.jsx";
// import { useNavigate } from 'react-router-dom';


function Banner2() {
  // const navigate = useNavigate();
  const { isMainSignup1,isMainSignup2 ,isReview } = useSignupNavigation();
    return (
      <>
        <div className="bg-white m-2 mx-4 p-4 flex justify-between px-12"> 

        <div
          className="flex gap-2 justify-around items-center cursor-pointer"
        >
       <div
            className= {`flex aspect-square items-center text-center align-middle px-5 py-2.5 ${isMainSignup1? `bg-[#3FD28B]`: `bg-[#757575]` } rounded-full text-xl text-slate-900`}
          >
            1
          </div>

          <div className="text-lg font-bold"> Personal Information</div>
        </div> 



        {/* <div
          className="flex gap-2 justify-around items-center cursor-pointer"
          onClick={() => setTab(2)}
        >
          <div
            className={cn(
              "flex aspect-square items-center text-center align-middle px-5 py-2.5 bg-[#3FD28B] rounded-full text-xl text-slate-900",
              { "bg-[#757575] text-white": tab !== 2 }
            )}
          >
            2
          </div>
          <div className="text-lg font-bold"> Qualifications</div>
        </div> */}



        {/* <div
          className="flex gap-2 justify-around items-center cursor-pointer"
          onClick={() => setTab(3)}
        >
          <div
            className={cn(
              "flex aspect-square items-center text-center align-middle px-5 py-2.5 bg-[#3FD28B] rounded-full text-xl text-slate-900",
              { "bg-[#757575] text-white": tab !== 3 }
            )}
          >
            3
          </div>
          <div className="text-lg font-bold"> Review and Proceed</div>
        </div> */}

        </div>

      </>
    )
  }

export default Banner2