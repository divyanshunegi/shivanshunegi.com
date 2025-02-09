import Brands from '../components/Brands';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Portfolio from '../components/Portfolio';
import Subscribe from '../components/Subscribe';
import TopVideos from '../components/TopVideos';

export default function Home() {
  return (
    <main className='min-h-screen bg-gray-50'>
      <Header />
      <Hero />
      <Portfolio />
      <TopVideos />
      <Brands />
      <Subscribe />
      <Navigation />
      <Footer />
    </main>
  );
}
