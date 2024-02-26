import { useSignupData } from "../../../utils/SignupContext"

function EducationalQualification() {
  const { signupData } = useSignupData();
    return (
      <div >
        <h1 className="bg-accordianblue p-8 mx-4">EducationalQualification</h1>
        <div className='flex flex-col p-4 mx-4 bg-white space-y-4'>

        <div className="space-y-1">
            <label>
            Aggregate Percentage*
          </label>
          <div>
          {signupData.percentage}
          </div>
        </div>


          <div className="space-y-1">
            <label>
              Year Of Passing
            </label>
            <div>
              {signupData.yearOfPassing}
            </div>
          </div>


            <div className='flex flex-row justify-between'>
              <div className='flex flex-col w-1/3'>
                        <label className='my-3 space-y-1'>
                          <div>
                            Qualification*
                          </div>
                            <div>
                              {signupData.qualification}
                            </div>
                        </label>



                        <label className='my-3'>
                          <div>
                            College*
                          </div>
                            <div>
                              {signupData.college}
                            </div>
                        </label>
                      </div>
              
              
              
                      <div className='flex flex-col w-1/3'>
              <label className='my-3'>
                <div>
              Stream*

                </div>
                <div>
                  {signupData.stream}
                </div>
                        </label>
              
                        <label className='my-3'>
                          <div>
              If Others, Please Enter Your College Name

                          </div>
                  <div>
                    {signupData.otherCollege}
                  </div>
                        </label>
              
                        </div>
            </div>

      <label className='my-3 w-1/4'>
        <div>

        Where Is Your College Located?*
        </div>
        <div>
          {signupData.collegeLocation}
        </div>
      </label>
        </div>
      </div>
    )
  }

export default EducationalQualification