'use client';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import VideoPortfolio from '@/components/VideoPortfolio';

export default function WorkPage() {
  return (
    <main className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <Header />
      <div className='pt-32'>
        <VideoPortfolio />
      </div>
      <div className='bg-white dark:bg-gray-900'>
        <Navigation />
      </div>
    </main>
  );
}
