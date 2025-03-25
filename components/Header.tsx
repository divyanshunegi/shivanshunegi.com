'use client';

import { useEffect, useState } from 'react';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';

import { useContactForm } from '@/context/ContactFormContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const { openContactForm } = useContactForm();

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 10);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isAtTop
          ? 'py-6 bg-transparent'
          : 'py-4 bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800'
      }`}
    >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <a
            href='/'
            className={`text-lg font-medium transition-all duration-300 ${
              isAtTop
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-900 dark:text-white'
            }`}
          >
            Shivansh Negi
          </a>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <a
              href='/work'
              className={`transition-colors text-sm ${
                isAtTop
                  ? 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              Work
            </a>
            <a
              href='/resources'
              className={`transition-colors text-sm ${
                isAtTop
                  ? 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              Resources
            </a>
            <a
              href='/services'
              className={`transition-colors text-sm ${
                isAtTop
                  ? 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              Services
            </a>
            <button
              onClick={openContactForm}
              className={`px-4 py-2 rounded-md text-sm transition-all ${
                isAtTop
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                  : 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
              }`}
            >
              Contact
            </button>
            <button
              onClick={toggleDarkMode}
              className='p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              aria-label='Toggle dark mode'
            >
              {isDarkMode ? <FaSun className='w-4 h-4' /> : <FaMoon className='w-4 h-4' />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className='flex items-center md:hidden'>
            <button
              onClick={toggleDarkMode}
              className='p-2 mr-2 text-gray-700 dark:text-gray-300'
              aria-label='Toggle dark mode'
            >
              {isDarkMode ? <FaSun className='w-4 h-4' /> : <FaMoon className='w-4 h-4' />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2 text-gray-700 dark:text-gray-300'
              aria-label='Toggle menu'
            >
              <FaBars className='w-5 h-5' />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
            <nav className='flex flex-col space-y-4'>
              <a
                href='/work'
                className='py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </a>
              <a
                href='/resources'
                className='py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </a>
              <button
                onClick={() => {
                  openContactForm();
                  setIsMenuOpen(false);
                }}
                className='py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
