import React, { useState } from 'react';
import Education from '../../components/signup/Education';
import Professional from '../../components/signup/Professional';

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border border-gray-200 rounded-md shadow-md">
      <button
        className="flex justify-between items-center w-full px-4 py-2 bg-accordianblue hover:bg-gray-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <div className="border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}

function MainSignup2() {
  return (
    <div className="space-y-2 m-4">
      <AccordionItem title="Education Qualiffications">
        <Education />
      </AccordionItem>
      <AccordionItem title="Professional Qualifications">
        <Professional />
      </AccordionItem>
    </div>
  );
}

export default MainSignup2;
