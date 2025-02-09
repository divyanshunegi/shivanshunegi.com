import Image from 'next/image';

export default function Hero() {
  return (
    <section className='pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center'>
          {/* Profile Image */}
          <div className='relative w-48 h-48 mx-auto mb-6'>
            {/* Yellow circle background */}
            <div className='absolute inset-0 bg-yellow-300 rounded-full'></div>
            {/* Curved line decoration */}
            <div className='absolute inset-0 rounded-full'>
              <div className='absolute -left-4 top-1/2 w-8 h-16 border-l-4 border-white transform -translate-y-1/2 rounded-l-full'></div>
              <div className='absolute -right-2 bottom-0 w-16 h-8 border-b-4 border-white rounded-b-full'></div>
            </div>
            {/* Profile image */}
            <div className='absolute inset-4'>
              <Image
                src='/images/PFP.jpg'
                alt='Profile'
                fill
                className='rounded-full object-cover'
                priority
              />
            </div>
          </div>

          {/* Greeting */}
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Hey Friends!
          </h1>

          {/* Introduction */}
          <p className='text-lg text-gray-600'>
            I'm Shivanshu. A film maker and{' '}
            <a
              href='https://youtube.com'
              className='text-blue-600 hover:underline'
            >
              YouTuber
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
