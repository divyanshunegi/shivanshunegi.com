import Link from 'next/link';
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

const Navigation = () => {
  const currentYear = new Date().getFullYear();

  const sections = {
    More: {
      About: '/about',
      Jobs: '/jobs',
      Contact: '/contact',
      'My Account': '/account',
    },
    'Free Content': {
      Newsletter: '/newsletter',
      'Articles & Guides': '/articles',
      Podcast: '/podcast',
      Videos: '/videos',
      'Book Notes': '/book-notes',
    },
    Products: {
      'My Book': '/book',
      'Productivity Lab': '/productivity-lab',
    },
  };

  const socialLinks = [
    {
      icon: <FaYoutube className='w-4 h-4' />,
      url: 'https://youtube.com/@shivanshufilms',
      label: 'YouTube',
    },
    {
      icon: <FaInstagram className='w-4 h-4' />,
      url: 'https://instagram.com/shivanshunegi',
      label: 'Instagram',
    },
    {
      icon: <FaLinkedin className='w-4 h-4' />,
      url: 'https://linkedin.com/in/shivanshunegi',
      label: 'LinkedIn',
    },
    {
      icon: <FaXTwitter className='w-4 h-4' />,
      url: 'https://x.com/shivanshunegiX',
      label: 'X (Twitter)',
    },
  ];

  return (
    <footer className='border-t border-gray-200 dark:border-gray-800'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8'>
          {/* Brand Column */}
          <div className='lg:col-span-2'>
            <Link href='/' className='inline-block'>
              <h2 className='text-xl font-medium text-gray-900 dark:text-white'>
                Shivanshu Negi
              </h2>
            </Link>
            <p className='mt-4 text-sm text-gray-600 dark:text-gray-300 max-w-sm'>
              A Musician, Cinematographer, Film Editor and so much more!
              Shivanshu is a Video Production Specialist and Content Strategist,
              with over 6 years of experience in the industry.
            </p>
            <div className='mt-6 flex gap-3'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className='col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8'>
            {Object.entries(sections).map(([title, links]) => (
              <div key={title}>
                <h3 className='font-medium text-sm text-gray-900 dark:text-white mb-4'>
                  {title}
                </h3>
                <ul className='space-y-2'>
                  {Object.entries(links).map(([label, url]) => (
                    <li key={label}>
                      <Link
                        href={url}
                        className='text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-12 pt-8 border-t border-gray-200 dark:border-gray-800'>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            © {currentYear} Shivanshu Negi. All rights reserved.
          </p>
          <div className='mt-2 flex gap-4'>
            <Link
              href='/terms'
              className='text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            >
              Terms
            </Link>
            <Link
              href='/privacy'
              className='text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Navigation;
