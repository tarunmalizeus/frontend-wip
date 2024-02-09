import { Outlet } from "react-router-dom"
import { JobApplyProvider } from "../../utils/JobApplyContext"

function Jobs() {
    return (
      <>
        <h1>Jobs</h1>
        <JobApplyProvider>
            <Outlet/>
        </JobApplyProvider>
      </>
    )
  }

export default Jobs