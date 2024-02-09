import { useJobApplyData } from '../../utils/JobApplyContext';


function Confirmation() {
  const {formData } = useJobApplyData();
  console.log(formData);
  return (
    <div>
      <h1>Confirmation</h1>
      <p>{formData.timeSlot}</p>
      <p>{formData.preferences.instructionalDesigner}</p>
      <p>{formData.preferences.softwareEngineer}</p>
      <p>{formData.preferences.softwareQualityEngineer}</p>
      <p>{formData.resume}</p>
    </div>
    )
  }

export default Confirmation