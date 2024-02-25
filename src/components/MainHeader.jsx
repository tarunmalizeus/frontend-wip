import Quantum from '../assets/Zeus-LMS-logo.svg'

function MainHeader() {
    return (
      <>
        <div className="w-full h-contain flex justify-between py-2 px-6 bg-[#1F2834] border-bordertop border-b-4">
          <div>
            <img src={Quantum} width={200} alt="" />
          </div>
        </div>
      </>
    )
  }

export default MainHeader