import Image from 'next/image';

export default function Hero() {
  return (
    <section className='pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center'>
          {/* Profile Image */}
          <div className='relative w-32 h-32 mx-auto mb-6'>
            <Image
              src='/images/PP.png'
              alt='Profile'
              fill
              className='rounded-full object-cover border-4 border-gray-50 shadow-lg'
              priority
            />
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
