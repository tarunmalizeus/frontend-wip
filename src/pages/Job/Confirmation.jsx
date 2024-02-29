import { useJobApplyData } from '../../utils/JobApplyContext';


function Confirmation() {
  const {useJobApplyData } = useJobApplyData();
  return (
    <div className='p-4 m-16 bg-white'>
      {/* <h1>Confirmation</h1>
      <div>
        <p>Time Slot: {formData.timeSlot}</p>
        <p>Preferences:</p>
        <p>Resume: {formData.resumeFile ? formData.resumeFile.name : 'None'}</p>
      </div> */}
    </div>
    )
  }

export default Confirmation