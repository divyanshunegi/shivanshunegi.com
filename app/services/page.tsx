import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Services from '@/components/Services';

export default function ServicesPage() {
  return (
    <main className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <Header />
      <div className='pt-32'>
        <Services />
      </div>
      <div className='bg-white dark:bg-gray-900'>
        <Navigation />
      </div>
    </main>
  );
}
