'use client';

import Image from 'next/image';

interface Brand {
  name: string;
  website?: string;
  logo: string;
}

const brands: Brand[] = [
  {
    name: 'Etsy',
    website: 'https://www.etsy.com',
    logo: '/images/Etsy.png',
  },
  {
    name: 'Dehancer',
    website: 'https://dehancer.com',
    logo: '/images/Dehancer_color.png',
  },
  {
    name: 'IDA',
    website: 'https://www.indiandocumentaryassociation.org',
    logo: '/images/IDA.png',
  },
];

export default function Brands() {
  return (
    <div className='py-12 bg-gray-50 dark:bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100'>Brands That Trust Us</h2>
        <div className='flex justify-center gap-20 flex-wrap'>
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.website}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block hover:opacity-80'
            >
              <div className='relative w-40 h-20'>
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
