'use client';

import Image from 'next/image';
import { FaPlay } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section className='min-h-screen relative flex items-center justify-center overflow-hidden font-["Helvetica_Neue",Helvetica,Arial,sans-serif] text-white'>
      {/* Background with gradient */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Hero BG.png'
          alt='Cinematic Background'
          fill
          className='object-cover opacity-40'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 via-gray-900/20 to-gray-900/35' />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center'>
        {/* Profile Image */}
        <div className='relative w-36 h-36 mx-auto mb-8 group'>
          {/* Strobe light effect */}
          <div className='absolute inset-0 rounded-full bg-[#fff5e9] opacity-0 group-hover:opacity-70 blur-xl group-hover:animate-pulse transition-all duration-300' />
          {/* Gradient ring */}
          <div className='absolute inset-0 rounded-full animate-spin-slow opacity-70 group-hover:opacity-90 transition-opacity duration-300 bg-gradient-to-r from-blue-500 to-purple-600' />
          <div className='absolute inset-1 rounded-full transition-colors duration-300 bg-gray-900 group-hover:bg-gray-950' />
          <Image
            src='/images/PFP.jpg'
            alt='Profile'
            fill
            className='rounded-full object-cover border-4 border-gray-900 group-hover:border-gray-950 group-hover:scale-105 transition-all duration-300'
            priority
          />

          {/* Animated Text Elements */}
          <div className='absolute -inset-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
            {[
              {
                text: 'Cinematographer',
                position:
                  'top-0 left-[20%] -translate-x-1/2 group-hover:-translate-y-2',
              },
              {
                text: 'Film Editor',
                position:
                  'top-[10%] -right-20 translate-x-2 group-hover:translate-x-0',
              },
              {
                text: 'Creative Strategist',
                position:
                  'top-[75%] left-1/2 -translate-x-1/2 group-hover:translate-y-1',
              },
              {
                text: 'Musician',
                position:
                  'top-1/4 -left-20 -translate-x-2 group-hover:translate-x-0',
              },
              {
                text: 'Tutor',
                position:
                  'top-1/3 -right-16 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0',
              },
              {
                text: 'YouTuber',
                position:
                  'bottom-1/3 -left-16 translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0',
              },
              {
                text: 'Traveller',
                position:
                  'bottom-1/3 -right-16 translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0',
              },
            ].map((item, index) => (
              <span
                key={item.text}
                className={`absolute text-sm font-medium text-white bg-gray-800/90 px-3 py-1 rounded-full backdrop-blur-sm transition-all duration-700 ease-out delay-${
                  index * 75
                } hover:scale-110 ${
                  index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
                } ${item.position}`}
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className='space-y-6 max-w-3xl mx-auto'>
          <h1 className='text-3xl md:text-5xl font-bold py-4'>
            <span className='text-white mb-4 block'>Hey, I'm Shivanshu</span>
            <span className='bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mt-4 block'>
              Filmmaker & Content Creator
            </span>
          </h1>

          <p className='text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed'>
            Crafting cinematic stories and teaching the art of filmmaking. From
            brand films to tutorials, I help brands and creators bring their
            vision to life.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8'>
            <a
              href='/work'
              className='inline-flex items-center px-8 py-3 rounded-full text-white font-medium transform hover:scale-105 transition-all duration-200 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
            >
              <FaPlay className='w-4 h-4 mr-2' />
              View My Work
            </a>
            <a
              href='/academy'
              className='inline-flex items-center px-8 py-3 rounded-full font-medium transform hover:scale-105 transition-all duration-200 bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
            >
              Join Academy
            </a>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-12'>
            {[
              { label: 'Years Experience', value: '6+' },
              { label: 'Projects Completed', value: '100+' },
              { label: 'Students Taught', value: '100+' },
              { label: 'Instagram Subscribers', value: '15K+' },
            ].map((stat, index) => (
              <div
                key={index}
                className='p-4 rounded-lg backdrop-blur-sm bg-black/50'
              >
                <div className='text-2xl font-bold text-white'>
                  {stat.value}
                </div>
                <div className='text-sm text-gray-400'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <div className='w-1 h-12 rounded-full bg-gradient-to-b from-blue-500 to-purple-600' />
        </div>
      </div>
    </section>
  );
}
