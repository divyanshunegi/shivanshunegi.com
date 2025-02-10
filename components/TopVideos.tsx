import Image from 'next/image';
import { FaPlay, FaYoutube } from 'react-icons/fa6';

interface Video {
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
  url: string;
}

export default function TopVideos() {
  const videos: Video[] = [
    {
      title: 'My Year 2024 Part 2 | Cinematic Travel Film',
      thumbnail: '/images/My Year 2024 Part 2.jpg',
      views: '1.5K',
      duration: '2:30',
      url: 'https://youtu.be/mZRX_oMN9Iw',
    },
    {
      title: 'Get The Perfect Film Look | Dehancer Pro with Premiere Pro',
      thumbnail: '/images/A7sIII + DCI 4K + Dehancer.jpg',
      views: '1.2K',
      duration: '1:00',
      url: 'https://youtu.be/UPRqsogrsRc',
    },
    {
      title: 'Feel Good With Etsy | Brand Film',
      thumbnail: '/images/PF1.png',
      views: '2.5K',
      duration: '1:30',
      url: 'https://youtu.be/Gy_LQdK_3bE',
    },
    {
      title: 'Devika Narain x Etsy | Brand Film',
      thumbnail: '/images/PF2.png',
      views: '1.8K',
      duration: '2:15',
      url: 'https://youtu.be/xR_jFGNQHCs',
    },
    {
      title: 'My Year 2024 Part 1 | Cinematic Travel Film',
      thumbnail: '/images/My Year 2024 Part 2.jpg',
      views: '2.1K',
      duration: '2:45',
      url: 'https://youtu.be/mZRX_oMN9Iw',
    },
  ];

  return (
    <section className='py-16 bg-gray-50 dark:bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            <span className='bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>
              Featured Videos
            </span>
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Watch some of my best cinematic work and brand collaborations
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300'
            >
              <div className='relative aspect-video rounded-t-xl overflow-hidden'>
                {/* Thumbnail */}
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className='object-cover transform group-hover:scale-105 transition-transform duration-500'
                />

                {/* Overlay with gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                {/* Duration Badge */}
                <div className='absolute bottom-3 right-3 bg-black/80 text-white text-sm px-2 py-1 rounded-md backdrop-blur-sm'>
                  {video.duration}
                </div>

                {/* Play Button Overlay */}
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110'>
                  <div className='bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors group-hover:animate-pulse'>
                    <FaPlay className='w-6 h-6' />
                  </div>
                </div>
              </div>

              <div className='p-5'>
                <h3 className='font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200 line-clamp-2'>
                  {video.title}
                </h3>
                <div className='mt-3 flex items-center justify-between'>
                  <span className='text-sm text-gray-600 dark:text-gray-400 flex items-center'>
                    <FaYoutube className='w-4 h-4 mr-1 text-red-600' />
                    {video.views} views
                  </span>
                  <span className='text-sm text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors'>
                    Watch Now →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className='text-center mt-12'>
          <a
            href='https://youtube.com/@shivanshufilms'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold hover:from-red-700 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
          >
            <FaYoutube className='w-6 h-6' />
            View More on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
