'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaCamera,
  FaChartLine,
  FaEdit,
  FaLightbulb,
  FaShareAlt,
} from 'react-icons/fa';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Video Production',
    description:
      'High-quality video content creation from concept to final delivery, specializing in cinematic storytelling and brand narratives.',
    icon: <FaCamera className='w-6 h-6' />,
    features: [
      'Professional cinematography with Sony A7sIII',
      'Cinematic color grading with Dehancer',
      'Aerial videography capabilities',
      'Studio and location shooting',
      'High-end audio recording',
    ],
    process: [
      {
        step: 1,
        title: 'Pre-Production',
        description:
          'Concept development, storyboarding, and detailed shot planning',
      },
      {
        step: 2,
        title: 'Production',
        description: 'Professional filming with state-of-the-art equipment',
      },
      {
        step: 3,
        title: 'Post-Production',
        description: 'Advanced editing, color grading, and final delivery',
      },
    ],
  },
  {
    id: 2,
    title: 'Content Strategy',
    description:
      'Strategic content planning and development to help brands tell their story effectively and reach their target audience.',
    icon: <FaChartLine className='w-6 h-6' />,
    features: [
      'Content audit and analysis',
      'Target audience research',
      'Content calendar planning',
      'Performance tracking',
      'ROI measurement',
    ],
    process: [
      {
        step: 1,
        title: 'Research',
        description: 'Understanding your brand, audience, and objectives',
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Creating a comprehensive content roadmap',
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Executing the strategy with measurable results',
      },
    ],
  },
  {
    id: 3,
    title: 'Video Editing',
    description:
      'Professional video editing services that transform raw footage into compelling visual stories.',
    icon: <FaEdit className='w-6 h-6' />,
    features: [
      'Advanced editing techniques',
      'Motion graphics',
      'Sound design',
      'Color correction and grading',
      'Format optimization',
    ],
    process: [
      {
        step: 1,
        title: 'Review',
        description: 'Analyzing footage and understanding requirements',
      },
      {
        step: 2,
        title: 'Edit',
        description: 'Crafting the narrative through precise editing',
      },
      {
        step: 3,
        title: 'Enhance',
        description: 'Adding effects, graphics, and audio enhancement',
      },
    ],
  },
  {
    id: 4,
    title: 'Creative Consultancy',
    description:
      'Expert guidance on creative direction and brand storytelling to help you stand out in your industry.',
    icon: <FaLightbulb className='w-6 h-6' />,
    features: [
      'Brand story development',
      'Creative direction',
      'Visual identity consultation',
      'Project conceptualization',
      'Brand voice definition',
    ],
    process: [
      {
        step: 1,
        title: 'Discovery',
        description: 'Understanding your vision and goals',
      },
      {
        step: 2,
        title: 'Ideation',
        description: 'Developing creative concepts and solutions',
      },
      {
        step: 3,
        title: 'Guidance',
        description: 'Providing expert advice and direction',
      },
    ],
  },
  {
    id: 5,
    title: 'Social Media Strategy',
    description:
      'Comprehensive social media planning and execution to build your brand presence and engage your audience.',
    icon: <FaShareAlt className='w-6 h-6' />,
    features: [
      'Platform-specific strategy',
      'Content calendar creation',
      'Engagement optimization',
      'Analytics and reporting',
      'Trend analysis',
    ],
    process: [
      {
        step: 1,
        title: 'Audit',
        description: 'Analyzing current social media presence',
      },
      {
        step: 2,
        title: 'Plan',
        description: 'Developing platform-specific strategies',
      },
      {
        step: 3,
        title: 'Execute',
        description: 'Implementing and monitoring campaigns',
      },
    ],
  },
];

export default function Services({
  isHomePage = false,
}: {
  isHomePage?: boolean;
}) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const displayedServices = isHomePage ? services.slice(0, 3) : services;

  return (
    <section className='py-16 bg-white dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>
            <span className='bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>
              Services
            </span>
          </h2>
          <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
            What I Offer
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {displayedServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              onClick={() => setSelectedService(service)}
              className='relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer group'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              <div className='relative p-8'>
                <motion.div
                  initial={false}
                  animate={{
                    scale: hoveredService === service.id ? 1.1 : 1,
                    rotate: hoveredService === service.id ? 360 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className='w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6'
                >
                  {service.icon}
                </motion.div>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors'>
                  {service.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  {service.description}
                </p>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredService === service.id ? 1 : 0,
                    height: hoveredService === service.id ? 'auto' : 0,
                  }}
                  className='mt-4 overflow-hidden'
                >
                  <ul className='space-y-2'>
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li
                        key={index}
                        className='text-sm text-gray-500 dark:text-gray-400 flex items-center'
                      >
                        <span className='w-1.5 h-1.5 bg-blue-500 rounded-full mr-2' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {isHomePage && (
          <div className='text-center mt-12'>
            <motion.a
              href='/services'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='inline-flex items-center px-8 py-3 border-2 border-blue-500 text-blue-500 font-medium rounded-full hover:bg-blue-500 hover:text-white transition-colors'
            >
              View All Services
            </motion.a>
          </div>
        )}

        {/* Service Details Modal */}
        {selectedService && (
          <div className='fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4'>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className='bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto'
            >
              <div className='p-6 sm:p-8'>
                <div className='flex justify-between items-start mb-6'>
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400'>
                      {selectedService.icon}
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
                      {selectedService.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                  >
                    <span className='sr-only'>Close</span>
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>

                <p className='text-gray-600 dark:text-gray-300 mb-8'>
                  {selectedService.description}
                </p>

                <div className='grid md:grid-cols-2 gap-8'>
                  {/* Features */}
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                      Key Features
                    </h3>
                    <ul className='space-y-3'>
                      {selectedService.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className='flex items-center text-gray-600 dark:text-gray-300'
                        >
                          <svg
                            className='w-5 h-5 text-blue-500 mr-3'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M5 13l4 4L19 7'
                            />
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                      Process
                    </h3>
                    <div className='space-y-4'>
                      {selectedService.process.map((step, index) => (
                        <motion.div
                          key={step.step}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className='bg-gray-50 dark:bg-gray-700 rounded-lg p-4'
                        >
                          <div className='flex items-center gap-3 mb-2'>
                            <span className='w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-medium'>
                              {step.step}
                            </span>
                            <h4 className='font-medium text-gray-900 dark:text-white'>
                              {step.title}
                            </h4>
                          </div>
                          <p className='text-gray-600 dark:text-gray-300 text-sm'>
                            {step.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='mt-8 flex justify-end'>
                  <button
                    onClick={() => setSelectedService(null)}
                    className='px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
