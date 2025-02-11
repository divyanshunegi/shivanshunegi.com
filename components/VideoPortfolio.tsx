'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaBehance, FaPlay, FaYoutube } from 'react-icons/fa6';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeUrl?: string;
  behanceUrl?: string;
  category: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Feel Good With Etsy',
    description:
      'A creative direction and video production project for Etsy, focusing on social media marketing and brand storytelling.',
    thumbnail: '/images/PF1.png',
    youtubeUrl: 'https://youtu.be/Gy_LQdK_3bE',
    behanceUrl: 'https://www.behance.net/gallery/168105457/Feel-Good-With-Etsy',
    category: 'Brand Film',
  },
  {
    id: '2',
    title: 'Devika Narain x Etsy',
    description:
      'A cinematic film project showcasing the collaboration between renowned wedding designer Devika Narain and Etsy.',
    thumbnail: '/images/PF2.png',
    youtubeUrl: 'https://youtu.be/xR_jFGNQHCs',
    behanceUrl:
      'https://www.behance.net/gallery/146474953/Devika-Narain-x-Etsy',
    category: 'Brand Film',
  },
  {
    id: '3',
    title: 'Sony A7sIII + DCI 4K + Dehancer',
    description:
      'A cinematic test footage showcasing the capabilities of the Sony A7sIII camera in DCI 4K with Dehancer color grading.',
    thumbnail: '/images/A7sIII-DCI-4K-Dehancer.jpg',
    youtubeUrl: 'https://youtu.be/UPRqsogrsRc',
    category: 'Tutorial',
  },
  {
    id: '4',
    title: 'My Year 2024 Part 2',
    description:
      'A cinematic travel film showcasing beautiful moments and landscapes from around the world.',
    thumbnail: '/images/My Year 2024 Part 2.jpg',
    youtubeUrl: 'https://youtu.be/mZRX_oMN9Iw',
    category: 'Travel Film',
  },
];

const categories = [
  'All',
  ...Array.from(new Set(videos.map((video) => video.category))),
];

export default function VideoPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const filteredVideos =
    selectedCategory === 'All'
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-4xl font-bold text-gray-900 dark:text-white mb-6'
          >
            <span className='bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>
              Featured Work
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'
          >
            Explore my latest cinematic films, brand collaborations, and
            creative projects
          </motion.p>

          {/* Category Filter */}
          <div className='flex flex-wrap justify-center gap-2 mt-8'>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                  ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white dark:bg-blue-500'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className='relative group'
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className='relative aspect-video rounded-xl overflow-hidden bg-gray-900'>
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-105'
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                    hoveredVideo === video.id ? 'opacity-60' : 'opacity-0'
                  }`}
                />

                {/* Content Overlay */}
                <div
                  className={`absolute inset-0 p-6 flex flex-col justify-between transition-opacity duration-300 ${
                    hoveredVideo === video.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div>
                    <h3 className='text-xl font-bold text-white mb-2'>
                      {video.title}
                    </h3>
                    <p className='text-gray-200 text-sm'>{video.description}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-4 justify-center'>
                    {video.youtubeUrl && (
                      <motion.a
                        href={video.youtubeUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className='flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors'
                      >
                        <FaYoutube className='w-5 h-5' />
                        Watch
                      </motion.a>
                    )}
                    {video.behanceUrl && (
                      <motion.a
                        href={video.behanceUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                      >
                        <FaBehance className='w-5 h-5' />
                        Case Study
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Play Button */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredVideo === video.id ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <div className='w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center'>
                    <FaPlay className='w-6 h-6 text-white ml-1' />
                  </div>
                </div>

                {/* Category Badge */}
                <div className='absolute top-4 right-4'>
                  <span className='px-3 py-1 text-sm font-medium text-white bg-black/50 backdrop-blur-sm rounded-full'>
                    {video.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
