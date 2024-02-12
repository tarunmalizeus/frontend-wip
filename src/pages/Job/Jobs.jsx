import { Outlet } from "react-router-dom"
import { JobApplyProvider } from "../../utils/JobApplyContext"

function Jobs() {
    return (
      <>
        <JobApplyProvider>
            <Outlet/>
        </JobApplyProvider>
      </>
    )
  }

export default Jobs