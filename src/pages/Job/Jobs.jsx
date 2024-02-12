import { Outlet } from "react-router-dom"
import { JobApplyProvider } from "../../utils/JobApplyContext"

function Job() {
    return (
      <>
        <JobApplyProvider>
            <Outlet/>
        </JobApplyProvider>
      </>
    )
  }

export default Job