import Image from 'next/image';
import { FaYoutube } from 'react-icons/fa6';

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
      title: 'How to Master Storytelling in Film',
      thumbnail: '/images/videos/storytelling.jpg',
      views: '150K',
      duration: '12:45',
      url: 'https://youtube.com/watch?v=example1',
    },
    {
      title: 'Advanced Color Grading Tutorial',
      thumbnail: '/images/videos/color-grading.jpg',
      views: '98K',
      duration: '15:20',
      url: 'https://youtube.com/watch?v=example2',
    },
    {
      title: 'Film Editing Techniques for Beginners',
      thumbnail: '/images/videos/editing.jpg',
      views: '200K',
      duration: '18:30',
      url: 'https://youtube.com/watch?v=example3',
    },
  ];

  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>Top Videos</h2>
          <p className='text-lg text-gray-600'>
            Watch my most popular tutorials and guides
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group'
            >
              <div className='relative aspect-video rounded-lg overflow-hidden bg-gray-200'>
                {/* Thumbnail */}
                <div className='absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/20 transition-colors duration-200' />
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className='object-cover'
                />
                {/* Duration Badge */}
                <div className='absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded'>
                  {video.duration}
                </div>
                {/* Play Button Overlay */}
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                  <div className='bg-red-600 text-white p-4 rounded-full'>
                    <FaYoutube className='w-8 h-8' />
                  </div>
                </div>
              </div>
              <div className='mt-4'>
                <h3 className='font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200'>
                  {video.title}
                </h3>
                <p className='text-sm text-gray-600 mt-1'>
                  {video.views} views
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className='text-center mt-12'>
          <a
            href='https://youtube.com/@shivanshufilms'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200'
          >
            <FaYoutube className='w-5 h-5' />
            View More on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
