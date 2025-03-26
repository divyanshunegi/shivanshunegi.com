'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  FaArrowRight,
  FaChartLine,
  FaInstagram,
  FaVideo,
} from 'react-icons/fa';

import { useContactForm } from '@/context/ContactFormContext';

const services = [
  {
    icon: <FaVideo className='w-6 h-6' />,
    title: 'Video Production',
    description:
      "In today's digital age, video content is king. Our high-impact commercial videos, music videos, and documentaries help brands tell their stories in compelling ways. With 80% of consumers saying video helps them make purchasing decisions, our professional video production services ensure your message resonates with your target audience.",
  },
  {
    icon: <FaInstagram className='w-6 h-6' />,
    title: 'Social Media',
    description:
      'As social media continues to drive brand engagement and sales, our strategic content creation and AI-powered campaign management help you stay ahead. We combine creative storytelling with data-driven insights to build meaningful connections with your audience, resulting in higher engagement rates and ROI.',
  },
  {
    icon: <FaChartLine className='w-6 h-6' />,
    title: 'Content Strategy',
    description:
      'A solid content strategy is crucial for sustainable growth. Our comprehensive marketing and brand growth strategies are tailored to your business goals. We analyze market trends, competitor landscapes, and audience behavior to create content that not only attracts but converts, delivering measurable results for your brand.',
  },
];

export default function Services() {
  const { openContactForm } = useContactForm();
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className='py-24 bg-gray-100 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
            Services
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Elevate your brand with our expertise
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer ${
                hoveredIndex === index ? 'z-10' : ''
              }`}
              onClick={() => router.push('/services')}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className='flex items-center gap-4 mb-4'>
                <div
                  className={`p-3 rounded-lg bg-blue-500/10 text-blue-500 transition-all duration-300 transform ${
                    hoveredIndex === index
                      ? 'bg-blue-500 text-white scale-110'
                      : ''
                  }`}
                >
                  {service.icon}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300'>
                  {service.title}
                </h3>
              </div>
              <div
                className={`relative overflow-hidden transition-all duration-300 ${
                  hoveredIndex === index
                    ? 'max-h-[200px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p
                  className={`text-gray-600 dark:text-gray-300 mb-6 transform transition-all duration-300 ${
                    hoveredIndex === index ? 'translate-y-0' : '-translate-y-4'
                  }`}
                >
                  {service.description}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openContactForm();
                }}
                className={`flex items-center text-blue-500 dark:text-blue-400 transition-colors duration-300 ${
                  hoveredIndex === index
                    ? 'text-blue-600 dark:text-blue-300'
                    : ''
                }`}
              >
                Learn More
                <FaArrowRight
                  className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                    hoveredIndex === index ? 'translate-x-1' : ''
                  }`}
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
