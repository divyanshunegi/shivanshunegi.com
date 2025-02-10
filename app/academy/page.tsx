import AcademyHero from '../../components/AcademyHero';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

export default function Academy() {
  return (
    <main className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <Header />
      <AcademyHero />
      <div className='bg-white dark:bg-gray-900'>
        <Navigation />
      </div>
    </main>
  );
}
