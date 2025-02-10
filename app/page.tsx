import Brands from '../components/Brands';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Portfolio from '../components/Portfolio';
import Subscribe from '../components/Subscribe';
import TopVideos from '../components/TopVideos';

export default function Home() {
  return (
    <main className='min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white'>
      <Header />
      <Hero />
      <Portfolio />
      <Brands />
      <TopVideos />
      <Subscribe />
      <div className='bg-white dark:bg-gray-900'>
        <Navigation />
      </div>
    </main>
  );
}
