'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaArrowRight, FaChartLine, FaInstagram, FaPlus,FaVideo } from 'react-icons/fa';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';

import { useContactForm } from '@/context/ContactFormContext';

interface Service {
  title: string;
  description: string;
  items: string[];
}

interface ServiceCategory {
  title: string;
  icon: JSX.Element;
  services: Service[];
}

export default function ServicesPage() {
  const { openContactForm } = useContactForm();
  const [expandedCategory] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<{category: number, service: number} | null>(null);

  const serviceCategories: ServiceCategory[] = [
    {
      title: 'Video Production',
      icon: <FaVideo className="w-8 h-8" />,
      services: [
        {
          title: 'Brand Commercials',
          description: 'High-impact commercial videos that tell your brand story.',
          items: ['Product Showcases', 'Brand Stories', 'TV Commercials']
        },
        {
          title: 'Music Videos',
          description: 'Creative music videos that capture the essence of your sound.',
          items: ['Artistic Direction', 'Visual Effects', 'Performance Capture']
        },
        {
          title: 'Documentaries',
          description: 'Compelling documentary films that share important stories.',
          items: ['Research & Planning', 'Interview Setup', 'Post-Production']
        }
      ]
    },
    {
      title: 'Social Media',
      icon: <FaInstagram className="w-8 h-8" />,
      services: [
        {
          title: 'Lead Generation',
          description: 'Strategic content to attract and convert potential clients.',
          items: ['Campaign Strategy', 'Content Calendar', 'Analytics Tracking']
        },
        {
          title: 'AI Storytelling',
          description: 'Innovative AI-powered content creation for social media.',
          items: ['AI Integration', 'Automated Content', 'Trend Analysis']
        },
        {
          title: 'Brand Advertisement',
          description: 'Targeted social media advertising campaigns.',
          items: ['Platform Strategy', 'Ad Creation', 'Performance Optimization']
        }
      ]
    },
    {
      title: 'Content Strategy',
      icon: <FaChartLine className="w-8 h-8" />,
      services: [
        {
          title: 'Lead Generation',
          description: 'Comprehensive strategies for business growth.',
          items: ['Market Research', 'Lead Magnets', 'Conversion Optimization']
        },
        {
          title: 'Marketing',
          description: 'Full-service marketing solutions for your brand.',
          items: ['Campaign Planning', 'Content Creation', 'Performance Analysis']
        },
        {
          title: 'Brand Awareness',
          description: 'Build and strengthen your brand presence.',
          items: ['Brand Strategy', 'Social Presence', 'Community Building']
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <div className="pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          Elevate your brand with tailored solutions designed to help you stand out
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 ${expandedCategory === categoryIndex ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'}`}

            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                  <div className="ml-auto">
                    <FaPlus className={`w-4 h-4 text-blue-500 transition-transform duration-300 ${expandedCategory === categoryIndex ? 'rotate-45' : ''}`} />
                  </div>
                </div>
                
                {true ? (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-6"
                  >
                    {category.services.map((service, serviceIndex) => (
                      <motion.div 
                        key={service.title} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: serviceIndex * 0.1 }}
                        className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg space-y-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        onMouseEnter={() => setHoveredService({category: categoryIndex, service: serviceIndex})}
                        onMouseLeave={() => setHoveredService(null)}
                      >
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center">
                          <FaArrowRight className="w-3 h-3 mr-2 text-blue-500" />
                          {service.title}
                        </h3>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: hoveredService?.category === categoryIndex && hoveredService?.service === serviceIndex ? 1 : 0,
                            height: hoveredService?.category === categoryIndex && hoveredService?.service === serviceIndex ? 'auto' : 0
                          }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                            {service.description}
                          </p>
                          <ul className="space-y-1 text-sm pl-5">
                            {service.items.map((item) => (
                              <li
                                key={item}
                                className="text-gray-700 dark:text-gray-300 list-disc"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </motion.div>
                    ))}
                    
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openContactForm();
                      }}
                      className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm"
                    >
                      Get in Touch
                      <FaArrowRight className="w-3 h-3" />
                    </motion.button>
                  </motion.div>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    Click to explore {category.services.length} services
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-900">
        <Navigation />
      </div>
    </main>
  );
}