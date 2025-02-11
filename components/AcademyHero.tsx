export default function AcademyHero() {
  return (
    <section className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 pt-[288px]'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text Content */}
          <div className='space-y-8'>
            <div>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>
                  Master the Art of Visual Storytelling
                </span>
              </h1>
              <p className='text-xl text-gray-300 mb-8'>
                Join an exclusive masterclass on Storytelling, Cinematography,
                and Film Editing taught by an industry professional.
              </p>
            </div>

            <div className='space-y-4'>
              <h3 className='text-2xl font-semibold'>
                What You&apos;ll Learn:
              </h3>
              <ul className='space-y-3'>
                <li className='flex items-center'>
                  <svg
                    className='w-6 h-6 mr-2 text-blue-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Advanced Storytelling Techniques</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-6 h-6 mr-2 text-blue-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Professional Cinematography Skills</span>
                </li>
                <li className='flex items-center'>
                  <svg
                    className='w-6 h-6 mr-2 text-blue-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span>Advanced Film Editing & Color Grading</span>
                </li>
              </ul>
            </div>

            <div className='pt-6'>
              <button className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg'>
                Join the Waitlist
              </button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className='bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700'>
            <h2 className='text-2xl font-bold mb-6'>Register Your Interest</h2>
            <form className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium mb-2'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  id='name'
                  className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='John Doe'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium mb-2'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='john@example.com'
                />
              </div>
              <div>
                <label
                  htmlFor='experience'
                  className='block text-sm font-medium mb-2'
                >
                  Experience Level
                </label>
                <select
                  id='experience'
                  className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                >
                  <option value=''>Select your experience level</option>
                  <option value='beginner'>Beginner</option>
                  <option value='intermediate'>Intermediate</option>
                  <option value='advanced'>Advanced</option>
                </select>
              </div>
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300'
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
