import Image from 'next/image';

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
    logo: '/images/brands/IDA.jpg',
    website: 'https://www.indiandocumentaryassociation.org',
  },
];

export default function Brands() {
  return (
    <section className='py-16 bg-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900'>
            Brands I&apos;ve Worked With
          </h2>
          <p className='mt-4 text-lg text-gray-600'>
            Proud to have collaborated with these amazing brands
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center'>
          {brands.map((brand) => (
            <div
              key={brand.name}
              className='relative w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300'
            >
              {brand.website ? (
                <a
                  href={brand.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block w-full h-full'
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className='object-contain'
                  />
                </a>
              ) : (
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className='object-contain'
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
