import { useJobApplyData } from '../../utils/JobApplyContext';
import './Confirmation.css';
import CheckBlack from '../../assets/check_black_24dp.svg';
import { useQuery, gql } from '@apollo/client';


const THINGS_2_REMEMBER = gql`
query ThingsToRemember($jobId: Int!) {
  jobById(job_id: $jobId) {
    thingsToRemember {
      things_to_remember
    }
  }
}
`


function Confirmation() {
  //retrieve from coupon code
  const {jobApplyData} = useJobApplyData();
  const {timeSlot, exact_date, venue_id, job_id} = jobApplyData;

  const { loading, error, data } = useQuery(THINGS_2_REMEMBER, {
    variables: { jobId: job_id },
    context: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('site')}`
      }
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  


  return (
    <>
     {/* <div className='p-4 m-16 bg-white'>
       <div>
         <p>Time Slot: {jobApplyData.timeSlot}</p>
         <p>Exact date: {jobApplyData.exact_date}</p>
        <p>Venue: {jobApplyData.venu_id}</p>
         <p> job_id: {jobApplyData.job_id} </p>
       </div>
     </div> */}

    <div>
    <div className="success-mainDiv">
        <div className="success-tick-circle-div">
            <img src={CheckBlack} className="success-tick-img" alt=""/>
        </div>
        <div className="success-title-container">
            <label className="success-title-label">Congratulations ! You have successfully applied for the
                walk-in
                opportunity</label>
        </div>
        <hr className="success-separator"/>
        <div className="success-dateTimeDiv">
            <label className="success-dateTime-title">Date & Time of Walk-In :</label>
            <label className="success-dateAndTime-label">{exact_date}</label>
            <label className="success-dateAndTime-label">{timeSlot}</label>
        </div>
        <hr className="success-separator"/>
        <div className="success-venue">
            <label className="success-dateTime-title">Venue of Walk-In :</label>
            <label className="success-dateAndTime-label">Zeus Systems Pvt. Ltd.</label>
            <label className="success-dateAndTime-label">1402, 14th Floor, Tower B, Peninsula Business Park.
                Ganpatrao Kadam Marg</label>
            <label className="success-dateAndTime-label">Lower Parel (W) </label>
            <label className="success-dateAndTime-label">Mumbai - 400 013</label>
            <label className="success-dateAndTime-label">Phone: +91-22-66600000</label>
        </div>
        <hr className="success-separator"/>
        <div className="success-venue">


            <label className="success-dateTime-title">THINGS TO REMEMBER :</label>
            {data.jobById.thingsToRemember.things_to_remember}
             {/* <label className="success-dateAndTime-label">- Please report 30 MINUTES prior to your reporting
                time. </label>
            <label className="success-dateAndTime-label">- Download your Hall Ticket from below and carry it
                with
                you during your Walk-In.</label> */}
        </div>
        <hr className="success-separator"/>
        <div className="success-downloadHallTicket-div">
            <button className="success-downloadHallTicket-button">DOWNLOAD HALL TICKET</button>
        </div>
    </div>
</div>
</>


    )
  }

export default Confirmation