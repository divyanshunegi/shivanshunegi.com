'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link?: string;
  details?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Feel Good With Etsy',
    description:
      'A creative direction and video production project for Etsy, focusing on social media marketing and brand storytelling.',
    imageUrl: '/images/PF1.png',
    category: 'Creative Direction & Video',
    link: 'https://www.behance.net/gallery/168105457/Feel-Good-With-Etsy',
    details:
      "Led the creative direction and video production for Etsy's social media campaign. The project focused on showcasing artisans and their unique creations while maintaining a consistent brand narrative that resonates with Etsy's core values.",
  },
  {
    title: 'Devika Narain x Etsy',
    description:
      'A cinematic film project showcasing the collaboration between renowned wedding designer Devika Narain and Etsy, shot on Sony A7sIII.',
    imageUrl: '/images/PF2.png',
    category: 'Cinematography & Film',
    link: 'https://www.behance.net/gallery/146474953/Devika-Narain-x-Etsy',
    details:
      'Captured the essence of luxury wedding design through cinematic storytelling. Shot entirely on Sony A7sIII, this project highlights the seamless blend of traditional craftsmanship with modern aesthetics.',
  },
  {
    title: 'Sony A7sIII + DCI 4K + Dehancer',
    description:
      'A cinematic test footage showcasing the capabilities of the Sony A7sIII camera in DCI 4K with Dehancer color grading.',
    imageUrl: '/images/A7sIII + DCI 4K + Dehancer.jpg',
    category: 'Camera Test & Color Grading',
    link: 'https://www.youtube.com/watch?v=UPRqsogrsRc',
    details:
      "Technical exploration of the Sony A7sIII's capabilities in DCI 4K, enhanced with Dehancer color grading. This project demonstrates the camera's exceptional low-light performance and cinematic potential.",
  },
];

const categories = [
  'All',
  ...Array.from(new Set(portfolioItems.map((item) => item.category))),
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section className='py-16 bg-gray-50 dark:bg-gray-800'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
            Portfolio
          </h2>
          <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
            Check out some of my recent work
          </p>

          {/* Category Filter */}
          <div className='flex flex-wrap justify-center gap-2 mt-8'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                  ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white dark:bg-blue-500'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className='group bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer'
              onClick={() => {
                setSelectedItem(item);
                setIsModalOpen(true);
              }}
            >
              <div className='relative h-48 overflow-hidden'>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className='object-cover transform transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300' />
              </div>
              <div className='p-6'>
                <span className='text-sm font-medium text-blue-600 dark:text-blue-400'>
                  {item.category}
                </span>
                <h3 className='mt-2 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200'>
                  {item.title}
                </h3>
                <p className='mt-2 text-gray-600 dark:text-gray-300'>
                  {item.description}
                </p>
                <button className='mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200'>
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedItem && (
          <div className='fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4'>
            <div className='relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6'>
              <button
                onClick={() => setIsModalOpen(false)}
                className='absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800'
              >
                ×
              </button>

              <div className='relative h-64 w-full mb-6'>
                <Image
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  fill
                  className='object-cover rounded-lg'
                />
              </div>

              <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                {selectedItem.title}
              </h2>
              <p className='text-sm font-medium text-blue-600 dark:text-blue-400 mb-4'>
                {selectedItem.category}
              </p>
              <p className='text-gray-600 dark:text-gray-300 mb-6'>
                {selectedItem.details || selectedItem.description}
              </p>

              {selectedItem.link && (
                <Link
                  href={selectedItem.link}
                  target='_blank'
                  className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors'
                >
                  View Project
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
