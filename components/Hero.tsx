'use client';

export default function Hero() {
  return (
    <section className='bg-gray-50 dark:from-gray-800 dark:to-gray-700 py-32 md:py-40'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6'>
        <div className='text-center'>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>
            Trust Your Vision to a Proven Creator
          </h1>
          <p className='text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12'>
            I'm Shivanshu Negi, a filmmaker with 9 years of experience solving visibility challenges. 
            Using AI-driven efficiency and high-impact storytelling, I turn your ideas into content that converts. 
            Watch how I make projects pop—and let's fix your presence together.
          </p>
          <div className='relative w-full max-w-4xl mx-auto aspect-video'>
            <iframe
              src='https://www.youtube.com/embed/M7arqa_vO4o'
              title='Shivanshu Negi YouTube Video'
              className='absolute top-0 left-0 w-full h-full rounded-lg shadow-lg'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
