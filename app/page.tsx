import Brands from '../components/Brands';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <main className='min-h-screen bg-gray-50'>
      <Header />
      <Hero />
      <Portfolio />
      <Brands />
      <Subscribe />
      <Footer />
    </main>
  );
}
