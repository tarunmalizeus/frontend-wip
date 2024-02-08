import React, { useState } from 'react';
import Education from './Education';
import Professional from './Professional';

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="py-2 px-4 w-full text-left font-semibold bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  );
}

function MainSignup2() {
  return (
    <div className="space-y-2">
      <AccordionItem title="Education">
        <Education />
      </AccordionItem>
      <AccordionItem title="Professional">
        <Professional />
      </AccordionItem>
    </div>
  );
}

export default MainSignup2;
