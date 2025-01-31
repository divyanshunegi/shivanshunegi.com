export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact</h3>
            <p className='text-gray-400'>email@shivanshunegi.com</p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Social</h3>
            <div className='space-x-4'>
              <a href='#' className='text-gray-400 hover:text-white'>
                Instagram
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                Vimeo
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Location</h3>
            <p className='text-gray-400'>Mumbai, India</p>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-800 text-center text-gray-400'>
          <p>
            © {new Date().getFullYear()} Shivanshu Negi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
