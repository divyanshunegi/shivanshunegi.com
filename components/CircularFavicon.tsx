'use client';

import Image from 'next/image';

export default function CircularFavicon() {
  return (
    <div className='fixed -z-50 opacity-0 pointer-events-none'>
      <div className='w-32 h-32 rounded-full overflow-hidden relative'>
        <Image
          src='/images/PFP.jpg'
          alt='Favicon'
          width={32}
          height={32}
          className='object-cover rounded-full'
          id='favicon-source'
        />
      </div>
    </div>
  );
}
