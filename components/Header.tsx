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
          : 'py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 shadow-sm'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <a
            href='/'
            className={`text-xl font-bold transition-all duration-300 ${
              isAtTop
                ? 'text-white'
                : 'text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            Shivansh Negi
          </a>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-8'>
            <a
              href='/'
              className={`transition-colors ${
                isAtTop
                  ? 'text-gray-200 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              Home
            </a>
            <a
              href='/work'
              className={`transition-colors ${
                isAtTop
                  ? 'text-gray-200 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              Work
            </a>
            <a
              href='/services'
              className={`transition-colors ${
                isAtTop
                  ? 'text-gray-200 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              Services
            </a>
            <a
              href='/academy'
              className={`transition-colors ${
                isAtTop
                  ? 'text-gray-200 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              Academy
            </a>
            <button
              onClick={openContactForm}
              className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                isAtTop
                  ? 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
              }`}
            >
              Contact
            </button>
            <button
              onClick={toggleDarkMode}
              className={`p-2 transition-colors ${
                isAtTop
                  ? 'text-gray-200 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              }`}
              aria-label='Toggle dark mode'
            >
              {isDarkMode ? (
                <FaSun className='w-5 h-5' />
              ) : (
                <FaMoon className='w-5 h-5' />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isAtTop
                ? 'text-gray-200 hover:text-white'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
            }`}
            aria-label='Toggle menu'
          >
            <FaBars className='w-6 h-6' />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className='md:hidden py-4 space-y-4 mt-4'>
            <a
              href='/'
              className='block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'
            >
              Home
            </a>
            <a
              href='/work'
              className='block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'
            >
              Work
            </a>
            <a
              href='/services'
              className='block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'
            >
              Services
            </a>
            <a
              href='/academy'
              className='block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'
            >
              Academy
            </a>
            <button
              onClick={() => {
                openContactForm();
                setIsMenuOpen(false);
              }}
              className='w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-200'
            >
              Contact
            </button>
            <button
              onClick={toggleDarkMode}
              className='w-full flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors'
              aria-label='Toggle dark mode'
            >
              {isDarkMode ? (
                <>
                  <FaSun className='w-5 h-5 mr-2' />
                  Light Mode
                </>
              ) : (
                <>
                  <FaMoon className='w-5 h-5 mr-2' />
                  Dark Mode
                </>
              )}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
