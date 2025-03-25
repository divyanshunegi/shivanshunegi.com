'use client';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';

export default function WorkPage() {
  return (
    <main className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <Header />
      <div className='pt-32'>
        {/* VideoPortfolio component has been removed */}
        <div className='text-center py-16'>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
            <span className='bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>
              Work
            </span>
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Portfolio content coming soon
          </p>
        </div>
      </div>
      <div className='bg-gray-50 dark:bg-gray-900'>
        <Navigation />
      </div>
    </main>
  );
}
