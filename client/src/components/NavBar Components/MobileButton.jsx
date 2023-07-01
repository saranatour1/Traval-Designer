/* eslint-disable no-unused-vars */
import React from 'react';
import  { useState } from 'react';

// eslint-disable-next-line react/prop-types
function MobileButton({openWindow}) {
  const [isOpen, setIsOpen] = useState(false);
    openWindow(isOpen);
  const handleToggle = () => {
    setIsOpen(!isOpen);
    openWindow(isOpen);
  };
  
  return (
    <button
    type="button"
    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    aria-controls="mobile-menu"
    aria-expanded={isOpen}
    onClick={handleToggle}
  >
    <span className="sr-only">Open main menu</span>
    {/* Icon when menu is closed */}
    <svg className={isOpen ? 'hidden' : 'block h-6 w-6'} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    {/* Icon when menu is open */}
    <svg className={isOpen ? 'block h-6 w-6' : 'hidden'} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
  )
}

export default MobileButton;