import Brands from '../components/Brands';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Services from '../components/Services';

export default function Home() {
  return (
    <main className='min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white'>
      <Header />
      <Hero />
      <Services />
      <Brands />
      <div className='bg-gray-50 dark:bg-gray-900'>
        <Navigation />
      </div>
    </main>
  );
}
