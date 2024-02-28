import Quantum from '../assets/Zeus-LMS-logo.svg'
import { useNavigate } from 'react-router-dom';


function MainHeader() {


  
    const signOut = () => {
      localStorage.removeItem('user');
      navigate('/login');
    };


    return (
      <>
        <div className=" w-full h-contain flex justify-between py-2 px-6 bg-[#1F2834] border-bordertop border-b-4">
          <div>
            <img src={Quantum} width={200} alt="" />
          </div>

          <div className="">
          <button
            onClick={(e) => {
              signOut();
            }}
            className="rounded-full  flex aspect-square border-2 border-solid border-[#3FD28B] bg-[#3C4E62] p-1 text-white text-lg items-center text-center align-middle"
          >
          Logout

          </button>
        </div>

        </div>
      </>
    )
  }

export default MainHeader