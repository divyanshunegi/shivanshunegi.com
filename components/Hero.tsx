import Image from 'next/image';

export default function Hero() {
  return (
    <section className='pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center'>
          {/* Profile Image */}
          <div className='relative w-32 h-32 mx-auto mb-6'>
            <Image
              src='/images/profile.jpg'
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
          <p className='text-lg text-gray-600 mb-6'>
            I'm Ali. I'm a Doctor turned Entrepreneur,{' '}
            <a
              href='https://youtube.com'
              className='text-blue-600 hover:underline'
            >
              YouTuber
            </a>
            , and the author of First Year Free Time.
          </p>

          {/* Subscription Box */}
          <div className='bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100'>
            <h2 className='text-2xl font-semibold mb-4'>
              Subscribe to LifeNotes
            </h2>
            <p className='text-gray-600 mb-6'>
              Get weekly insights on productivity, mindset, and achieving your
              goals.
            </p>
            <form className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button
                type='submit'
                className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
