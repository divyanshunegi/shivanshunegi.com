'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaDownload, FaMusic,FaPlay } from 'react-icons/fa';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';

export default function ResourcesPage() {
  const [downloadingStates, setDownloadingStates] = useState<{ [key: string]: boolean }>({
    lut1: false,
    lut2: false,
    sfx1: false,
    sfx2: false,
  });

  const handleDownload = (resourceId: string) => {
    setDownloadingStates(prev => ({ ...prev, [resourceId]: true }));
    // Simulate download delay
    setTimeout(() => {
      setDownloadingStates(prev => ({ ...prev, [resourceId]: false }));
    }, 2000);
  };

  const lutResources = [
    {
      id: 'lut1',
      title: 'Cinematic LUT Pack Vol. 1',
      description: 'Professional cinematic color grading presets inspired by Hollywood blockbusters.',
      image: '/images/PF1.png',
      downloads: '2.5K+',
      fileSize: '24MB',
    },
    {
      id: 'lut2',
      title: 'Moody Film LUTs',
      description: 'Create atmospheric and emotional scenes with these carefully crafted LUTs.',
      image: '/images/PF2.png',
      downloads: '1.8K+',
      fileSize: '18MB',
    },
  ];

  const otherResources = [
    {
      id: 'sfx1',
      title: 'Cinematic Sound Effects',
      description: 'High-quality sound effects for adding depth and atmosphere to your videos.',
      icon: <FaMusic className="w-8 h-8" />,
      downloads: '3.2K+'
    }
  ];

  return (
    <main className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      <Header />
      <div className='pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-4xl font-bold text-gray-900 dark:text-white mb-8'
        >
          Free Resources
        </motion.h1>
        
        {/* LUTs Section */}
        <section className='mb-16'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2'>
              <FaPlay className="text-blue-500" />
              LUTs & Presets
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {lutResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className='group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300'
                >
                  <div className='aspect-video relative overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10' />
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700'
                    />
                    <div className='absolute bottom-4 left-4 z-20 flex items-center gap-4 text-white/90'>
                      <span className='flex items-center gap-1'>
                        <FaDownload className='w-4 h-4' />
                        {resource.downloads}
                      </span>
                      <span className='text-sm'>{resource.fileSize}</span>
                    </div>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors'>
                      {resource.title}
                    </h3>
                    <p className='text-gray-600 dark:text-gray-300 mb-6'>
                      {resource.description}
                    </p>
                    <button
                      onClick={() => handleDownload(resource.id)}
                      disabled={downloadingStates[resource.id]}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {downloadingStates[resource.id] ? (
                        <>
                          <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                          Downloading...
                        </>
                      ) : (
                        <>
                          <FaDownload className='w-5 h-5' />
                          Download Now
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Other Resources Section */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>Other Resources</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {otherResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className='group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300'
                >
                  <div className='flex items-start gap-4'>
                    <div className='p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform duration-300'>
                      {resource.icon}
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors'>
                        {resource.title}
                      </h3>
                      <p className='text-gray-600 dark:text-gray-300 mb-4'>
                        {resource.description}
                      </p>
                      <div className='flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6'>
                        <span className='flex items-center gap-1'>
                          <FaDownload className='w-4 h-4' />
                          {resource.downloads}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDownload(resource.id)}
                        disabled={downloadingStates[resource.id]}
                        className='w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-75 disabled:cursor-not-allowed'
                      >
                        {downloadingStates[resource.id] ? (
                          <>
                            <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                            Downloading...
                          </>
                        ) : (
                          <>
                            <FaDownload className='w-5 h-5' />
                            Download Now
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
      <div className='bg-gray-50 dark:bg-gray-900'>
        <Navigation />
      </div>
    </main>
  );
}