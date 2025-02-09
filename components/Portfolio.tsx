import Image from 'next/image';
import Link from 'next/link';

interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Feel Good With Etsy',
    description:
      'A creative direction and video production project for Etsy, focusing on social media marketing and brand storytelling.',
    imageUrl: '/images/portfolio/etsy/cover.jpg',
    category: 'Creative Direction & Video',
    link: 'https://www.behance.net/gallery/168105457/Feel-Good-With-Etsy',
  },
];

export default function Portfolio() {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900'>Portfolio</h2>
          <p className='mt-4 text-lg text-gray-600'>
            Check out some of my recent work
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl'
            >
              <div className='relative h-48'>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-6'>
                <span className='text-sm font-medium text-blue-600'>
                  {item.category}
                </span>
                <h3 className='mt-2 text-xl font-semibold text-gray-900'>
                  {item.title}
                </h3>
                <p className='mt-2 text-gray-600'>{item.description}</p>
                {item.link && (
                  <Link
                    href={item.link}
                    target='_blank'
                    className='mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium'
                  >
                    View Project →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
