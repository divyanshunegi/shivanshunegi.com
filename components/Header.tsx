export default function Header() {
  return (
    <header className='fixed w-full bg-white/80 backdrop-blur-sm z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <div className='text-xl font-semibold'>Shivanshu Negi</div>
          <nav className='hidden md:flex space-x-8'>
            <a href='#work' className='text-gray-600 hover:text-gray-900'>
              Work
            </a>
            <a href='#about' className='text-gray-600 hover:text-gray-900'>
              About
            </a>
            <a href='#contact' className='text-gray-600 hover:text-gray-900'>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
