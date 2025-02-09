export default function Header() {
  return (
    <header className='fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-4'>
          <div className='flex items-center space-x-8'>
            <a
              href='/'
              className='text-xl font-semibold hover:text-blue-600 transition-colors'
            >
              Shivanshu Negi
            </a>
            <nav className='hidden md:flex space-x-8'>
              <a
                href='#work'
                className='text-gray-600 hover:text-blue-600 transition-colors'
              >
                Work
              </a>
              <a
                href='/academy'
                className='text-gray-600 hover:text-blue-600 transition-colors'
              >
                Academy
              </a>
              <a
                href='#about'
                className='text-gray-600 hover:text-blue-600 transition-colors'
              >
                About
              </a>
            </nav>
          </div>
          <div className='flex items-center space-x-6'>
            <a
              href='#contact'
              className='text-gray-600 hover:text-blue-600 transition-colors'
            >
              Contact
            </a>
            <a
              href='/academy'
              className='hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors'
            >
              Join Academy
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
