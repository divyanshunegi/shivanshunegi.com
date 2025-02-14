'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Brand {
  name: string;
  logo: string;
  website?: string;
}

const brands: Brand[] = [
  {
    name: 'Etsy',
    logo: '/images/brands/Etsy.png',
    website: 'https://www.etsy.com',
  },
  {
    name: 'Dehancer',
    logo: '/images/brands/Dehancer.png',
    website: 'https://dehancer.com',
  },
  {
    name: 'IDA',
    logo: '/images/brands/IDA.png',
    website: 'https://www.indiandocumentaryassociation.org',
  },
];

export default function Brands() {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Create an extended array for infinite scroll effect
  const extendedBrands = [...brands, ...brands, ...brands];

  useEffect(() => {
    if (isPaused) return;

    const animate = () => {
      setOffset((prev) => {
        const newOffset = prev + 0.15; // Very slow movement
        // Reset when we've moved one full brand width
        if (newOffset >= 100) {
          return 0;
        }
        return newOffset;
      });
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className='py-12 bg-white dark:bg-gray-900 overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold mb-4'>
            <span className='bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>
              Brands I&apos;ve Worked With
            </span>
          </h2>
          <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
            Proud to have collaborated with these amazing brands
          </p>
        </div>

        <div className='relative max-w-4xl mx-auto'>
          <div className='relative h-24 sm:h-32 overflow-hidden'>
            <div
              className='flex gap-8 sm:gap-12 absolute transition-transform duration-1000'
              style={{
                transform: `translateX(-${offset}%)`,
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {extendedBrands.map((brand, index) => {
                // Calculate position relative to center
                const position = Math.abs(
                  ((index + Math.floor(offset / (100 / brands.length))) %
                    brands.length) -
                    1
                );
                const scale = position === 1 ? 0.8 : 0.7;
                const opacity = position === 1 ? 1 : 0.7;
                const blur = position === 1 ? 0 : 1;

                return (
                  <div
                    key={`${brand.name}-${index}`}
                    className='flex-none w-24 h-24 sm:w-32 sm:h-32 transition-all duration-1000'
                    style={{
                      transform: `scale(${scale})`,
                      opacity,
                      filter: `blur(${blur}px)`,
                    }}
                  >
                    {brand.website ? (
                      <a
                        href={brand.website}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='block w-full h-full relative'
                      >
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          fill
                          className='object-contain dark:invert transform hover:scale-105 transition-transform duration-300'
                        />
                      </a>
                    ) : (
                      <div className='relative w-full h-full'>
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          fill
                          className='object-contain dark:invert'
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className='absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none' />
          <div className='absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none' />
        </div>
      </div>
    </section>
  );
}
