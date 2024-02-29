import { useJobApplyData } from '../../utils/JobApplyContext';


function Confirmation() {
  const {jobApplyData} = useJobApplyData();
  return (
    <div className='p-4 m-16 bg-white'>
      <div>
        <p>Time Slot: {jobApplyData.timeSlot}</p>
        <p>Preferences:</p>
        <p>Resume: {jobApplyData.resumeFile ? jobApplyData.resumeFile.name : 'None'}</p>
      </div>
    </div>
    )
  }

export default Confirmation