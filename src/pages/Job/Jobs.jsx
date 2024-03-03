import { Outlet } from "react-router-dom"

function Jobs() {
    return (
      <>
        {/* <JobApplyProvider> */}
            <Outlet/>
        {/* </JobApplyProvider> */}
      </>
    )
  }

export default Jobs