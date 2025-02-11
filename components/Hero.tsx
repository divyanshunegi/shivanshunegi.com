import Image from 'next/image';
import { FaPlay } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section className='min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 font-["Helvetica_Neue",Helvetica,Arial,sans-serif]'>
      {/* Background Video/Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Hero BG.png'
          alt='Cinematic Background'
          fill
          className='object-cover opacity-40'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-b from-gray-900/35 via-gray-900/28 to-gray-900/49' />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center'>
        {/* Profile Image */}
        <div className='relative w-36 h-36 mx-auto mb-8 group'>
          {/* Strobe light effect */}
          <div className='absolute inset-0 rounded-full bg-[#fff5e9] opacity-0 group-hover:opacity-70 blur-xl group-hover:animate-pulse transition-all duration-300' />
          {/* Gradient ring */}
          <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-spin-slow opacity-70 group-hover:opacity-90 transition-opacity duration-300' />
          <div className='absolute inset-1 rounded-full bg-gray-900 group-hover:bg-gray-950 transition-colors duration-300' />
          <Image
            src='/images/PFP.jpg'
            alt='Profile'
            fill
            className='rounded-full object-cover border-4 border-gray-900 group-hover:scale-105 group-hover:border-gray-950 transition-all duration-300'
            priority
          />

          {/* Animated Text Elements */}
          <div className='absolute -inset-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
            <span className='absolute top-0 left-[20%] -translate-x-1/2 text-sm font-medium text-gray-900 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm group-hover:-translate-y-2 transition-all duration-700 ease-out hover:scale-110 animate-float'>
              Cinematographer
            </span>
            <span className='absolute top-[10%] -right-20 text-sm font-medium text-gray-900 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm group-hover:translate-x-0 translate-x-2 transition-all duration-700 ease-out delay-75 hover:scale-110 animate-float-delayed'>
              Film Editor
            </span>
            <span className='absolute top-[75%] left-1/2 -translate-x-1/2 text-sm font-medium text-gray-900 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm group-hover:translate-y-1 transition-all duration-700 ease-out delay-150 hover:scale-110 animate-float'>
              Creative Strategist
            </span>
            <span className='absolute top-1/4 -left-20 text-sm font-medium text-gray-900 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm group-hover:translate-x-0 -translate-x-2 transition-all duration-700 ease-out delay-225 hover:scale-110 animate-float-delayed'>
              Musician
            </span>
            <span className='absolute top-1/3 -right-16 text-sm font-medium text-gray-900 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm group-hover:translate-y-0 -translate-y-1 group-hover:translate-x-0 translate-x-1 transition-all duration-700 ease-out delay-300 hover:scale-110 animate-float'>
              Tutor
            </span>
            <span className='absolute bottom-1/3 -left-16 text-sm font-medium text-gray-900 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm group-hover:translate-y-0 translate-y-1 group-hover:translate-x-0 -translate-x-1 transition-all duration-700 ease-out delay-375 hover:scale-110 animate-float-delayed'>
              YouTuber
            </span>
            <span className='absolute bottom-1/3 -right-16 text-sm font-medium text-gray-900 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm group-hover:translate-y-0 translate-y-1 group-hover:translate-x-0 translate-x-1 transition-all duration-700 ease-out delay-450 hover:scale-110 animate-float'>
              Traveller
            </span>
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
              className='inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200'
            >
              <FaPlay className='w-4 h-4 mr-2' />
              View My Work
            </a>
            <a
              href='/academy'
              className='inline-flex items-center px-8 py-3 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 border border-gray-700 transform hover:scale-105 transition-all duration-200'
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
                className='p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm'
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
