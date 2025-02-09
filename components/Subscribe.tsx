export default function Subscribe() {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-white p-8 rounded-2xl shadow-sm border border-gray-100'>
          <h2 className='text-2xl font-semibold mb-4 text-gray-900'>
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
    </section>
  );
}
