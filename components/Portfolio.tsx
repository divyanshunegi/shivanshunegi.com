'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaArrowRight, FaEdit } from 'react-icons/fa';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link?: string;
}

const portfolioItems: PortfolioItem[] = Array(6)
  .fill(null)
  .map((_, index) => ({
    id: `item-${index + 1}`,
    title: `Project ${index + 1}`,
    description: 'Click to edit this project',
    imageUrl: '/images/placeholder.jpg',
    category: 'Empty',
    link: '#',
  }));

export default function Portfolio() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className='relative'>
      {/* Blur Overlay */}
      <div
        className={`fixed inset-0 bg-gray-900/30 backdrop-blur-[2px] transition-opacity duration-300 z-10 ${
          hoveredItem ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0'>
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            className={`group relative aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden cursor-pointer ${
              hoveredItem === item.id ? 'z-20' : 'z-0'
            }`}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: hoveredItem === item.id ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Gradient */}
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

            {/* Empty State with Animated Border */}
            <div className='absolute inset-0 flex items-center justify-center overflow-hidden'>
              <div className='relative w-16 h-16'>
                <div className='absolute inset-0 rounded-full border-2 border-gray-300 dark:border-gray-500 group-hover:scale-110 group-hover:rotate-180 transition-all duration-700' />
                <div className='absolute inset-0 rounded-full border-2 border-gray-300 dark:border-gray-500 group-hover:scale-110 group-hover:-rotate-180 transition-all duration-700 delay-100' />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <FaEdit className='w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300' />
                </div>
              </div>
            </div>

            {/* Content Overlay */}
            <div
              className={`absolute inset-0 p-6 flex flex-col justify-end transform transition-all duration-300 ${
                hoveredItem === item.id
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
            >
              <motion.div
                initial={false}
                animate={{ y: hoveredItem === item.id ? 0 : 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className='text-xl font-semibold text-white mb-2 flex items-center group-hover:text-blue-400 transition-colors'>
                  {item.title}
                  <FaArrowRight className='ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300' />
                </h3>
                <p className='text-base text-gray-200 transform transition-all duration-300'>
                  {item.description}
                </p>
              </motion.div>

              {/* Category Badge */}
              <motion.div
                className='absolute top-4 right-4'
                initial={false}
                animate={{
                  scale: hoveredItem === item.id ? 1 : 0.8,
                  opacity: hoveredItem === item.id ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <span className='px-3 py-1 text-sm font-medium text-white bg-blue-500/80 backdrop-blur-[2px] rounded-full'>
                  {item.category}
                </span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
