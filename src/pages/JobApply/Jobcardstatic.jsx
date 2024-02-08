import React from 'react';
import { Link } from 'react-router-dom';

function Jobcardstatic({ job }) {
  return (
    <div className="w-screem shadow-lg bg-white p-4 m-4">
          <div className="font-bold text-xl mb-2">{job.name}</div>
          <p className="text-gray-700 text-base">From: {job.from_time}</p>
          <p className="text-gray-700 text-base">To: {job.to_time}</p>
          <p className="text-gray-700 text-base">Location: {job.location_name}</p>
          <p className="text-gray-700 text-base">Role: {job.roles_in_job}</p>
          <p className="text-gray-700 text-base">Internship: {job.internship}</p>
          <button

          className="bg-lightgreen  w-1/4 p-2 mt-4"
          type="submit"
          name="aaply"
          id="aaply"
          value="Apply"
          >
          Apply
          </button>
    </div>
  );
}

export default Jobcardstatic;

