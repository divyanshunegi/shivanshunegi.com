export default function Subscribe() {
  return (
    <section className='py-16 bg-gray-50 dark:bg-gray-800'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
            Subscribe to my Newsletter
          </h2>
          <p className='text-gray-600 dark:text-gray-300 mb-6'>
            Get weekly updates on Film Making, Free LUTs and much more.
          </p>
          <form className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400'
            />
            <button
              type='submit'
              className='bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
