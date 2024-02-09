import Apply from './Apply'
import '../../index.css'

function Processandapply() {
    return (
      <div className='space-y-4'>
        <div className='bg-white shadow-md p-4'>
          <div className='border-b-2'>
            <h2 className="text-gray-500 mb-2">General Instructions:</h2>
                  <ul className="list-disc list-inside mb-6 space-y-2 list-dash text-xs">
            <li>We have a two-year indemnity for permanent candidates. We will provide training to the selected candidates.</li>
            <li>Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test.</li>
                  </ul>
          </div>
      
      <div className='border-b-2 pt-4'>
        <h3 className="text-gray-500 mb-4">Instructions for the Exam:</h3>
        <ul className="list-disc list-inside mb-6 space-y-2 list-dash text-xs">
          <li>Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera.</li>
          <li>By taking this test, you are permitting the examination system to capture your video for invigilation purposes.</li>
          <li>The candidates must not be able to be excused from the exam until the web camera attached to their system is not functional.</li>
          <li>The web camera should be on and recording for the duration of the examination and will also be monitored by a live proctor. The proctor may terminate a candidate's examination if they observe any malpractice during the exam.</li>
          <li>Candidates are advised to use their own laptop/PC with a stable internet connection (min 1 Mbps) during the exam.</li>
          <li>Candidates cannot use an iOS system/device for this exam.</li>
        </ul>
      </div>
      
      <div className='border-b-2 pt-4'>
        <h3 className="text-gray-500 mb-4">Minimum System Requirements:</h3>
        <ul className="list-disc list-inside mb-6 space-y-2 list-dash text-xs">
          <li>Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above).</li>
          <li>The latest version of Google Chrome Browser only.</li>
          <li>Please note that Internet speed should be minimum 1 Mbps.</li>
          <li>Do not use a MacBook or iPad for the proctored exam.</li>
        </ul>
      </div>
      
      <div className=' pt-4 '>
        <h3 className="text-gray-500 mb-4">Process:</h3>
        <ul className="list-disc list-inside mb-6 space-y-2 list-dash text-xs ">
          <li>Every round is an elimination round. Candidates need to clear all rounds to get selected.</li>
        </ul>
        
        <div className="text-xs  pt-2 ">
          <p>Round 1: 4th August, 2018</p>
          <p>Aptitude Test: 25 Questions</p>
        </div>
      </div>
        </div>
      
        <Apply/>
      </div>
    )
  }

export default Processandapply