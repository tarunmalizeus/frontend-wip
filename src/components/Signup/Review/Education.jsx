import { useSignupData } from "../../../utils/SignupContext"
import QualificationStatic from "./Qualification";
import StreamStatic from "./StreamStatic";
import CollegeStatic from "./CollegeStatic";


function Education() {
  const { signupData } = useSignupData();
    return (

      <div>
        <h1 className="bg-accordianblue p-4 mx-4">Educational Qualifications</h1>
        <form className='flex flex-col p-4 mx-4 bg-white gap-8'>
        <div className='flex flex-col'>
          <label className="text-gray-500 text-sm ">
            Aggregate Percentage*
          </label>
          <input
            className='my-3  w-1/4 bg-white'
            type="number"
            name="percentage"
            value={signupData.percentage}
            disabled

          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className="text-gray-500 text-sm ">
            Year Of Passing
          </label>
          {signupData.yearOfPassing}
        </div>


        <div className='flex flex-row justify-between '>
          <div className='flex flex-col w-1/3 gap-8'>
        <QualificationStatic/>
        <CollegeStatic/>
          </div>
          <div className='flex flex-col w-1/3 gap-8'>
            <StreamStatic/>
            <label className='my-3 flex flex-col gap-2'>
              <div className="text-gray-500 text-sm ">
                If Others, Please Enter Your College Name
              </div>
                {signupData.otherCollege? signupData.otherCollege : "-"}
            </label>
          </div>
        </div>
        <div className='flex flex-col'>
          <label className='my-3  w-1/4'>
            <div className="text-gray-500 text-sm ">
              Where Is Your College Located?*
            </div>
            <input
              type="text"
              name="collegeLocation"
              value={signupData.collegeLocation}
              disabled
              className="bg-white"
        />
          </label>
        </div>
        
        
        
            </form>
      </div>



      // <div >
      //   <h1 className="bg-accordianblue p-8 mx-4">Education</h1>
      //   <div className='flex flex-col p-4 mx-4 bg-white space-y-4'>

      //   <div className="space-y-1">
      //       <label>
      //       Aggregate Percentage*
      //     </label>
      //     <div>
      //     {signupData.percentage}
      //     </div>
      //   </div>


      //     <div className="space-y-1">
      //       <label>
      //         Year Of Passing
      //       </label>
      //       <div>
      //         {signupData.yearOfPassing}
      //       </div>
      //     </div>


      //       <div className='flex flex-row justify-between'>
      //         <div className='flex flex-col w-1/3'>
      //                   <label className='my-3 space-y-1'>
      //                     <div>
      //                       Qualification*
      //                     </div>
      //                       <div>
      //                         {signupData.qualification}
      //                       </div>
      //                   </label>



      //                   <label className='my-3'>
      //                     <div>
      //                       College*
      //                     </div>
      //                       <div>
      //                         {signupData.college}
      //                       </div>
      //                   </label>
      //                 </div>
              
              
              
      //                 <div className='flex flex-col w-1/3'>
      //         <label className='my-3'>
      //           <div>
      //         Stream*

      //           </div>
      //           <div>
      //             {signupData.stream}
      //           </div>
      //                   </label>
              
      //                   <label className='my-3'>
      //                     <div>
      //         If Others, Please Enter Your College Name

      //                     </div>
      //             <div>
      //               {signupData.otherCollege}
      //             </div>
      //                   </label>
              
      //                   </div>
      //       </div>

      // <label className='my-3 w-1/4'>
      //   <div>

      //   Where Is Your College Located?*
      //   </div>
      //   <div>
      //     {signupData.collegeLocation}
      //   </div>
      // </label>
      //   </div>
      // </div>
    )
  }

export default Education