import { useJobApplyData } from '../../utils/JobApplyContext';


function Confirmation() {
  const {formData } = useJobApplyData();
  return (
    <div className='p-4 m-16 bg-white'>
      <h1>Confirmation</h1>
      <div>
        <p>Time Slot: {formData.timeSlot}</p>
        <p>Preferences:</p>
        <ul>
          {Object.entries(formData.preferences).map(([key, value]) => (
            <li key={key}>{key}: {value ? 'Yes' : 'No'}</li>
          ))}
        </ul>
        <p>Resume: {formData.resume ? formData.resume.name : 'None'}</p>
      </div>
    </div>
    )
  }

export default Confirmation