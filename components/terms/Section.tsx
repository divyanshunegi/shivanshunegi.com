'use client';

import React, { useState } from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className='border-b border-gray-200 dark:border-gray-700'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full py-4 flex justify-between items-center text-left'
      >
        <h2 className='text-xl font-semibold'>{title}</h2>
        <span
          className='transform transition-transform duration-200'
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[2000px] pb-6' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};
