import { useJobApplyData } from '../../utils/JobApplyContext';


function Confirmation() {
  //retrieve from coupon code

  const {jobApplyData} = useJobApplyData();
  return (
    <div className='p-4 m-16 bg-white'>
      <div>
        <p>Time Slot: {jobApplyData.timeSlot}</p>
        <p>Exact date: {jobApplyData.exact_date}</p>
        <p>Venue: {jobApplyData.venu_id}</p>
        <p> job_id: {jobApplyData.job_id} </p>
      </div>
    </div>
    )
  }

export default Confirmation