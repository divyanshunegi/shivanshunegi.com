import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
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
      'YouTuber Academy': '/academy',
    },
  };

  const socialLinks = [
    {
      icon: <FaYoutube className='w-5 h-5' />,
      url: 'https://youtube.com/@shivanshunegi',
    },
    {
      icon: <FaInstagram className='w-5 h-5' />,
      url: 'https://instagram.com/shivanshunegi',
    },
    {
      icon: <FaLinkedin className='w-5 h-5' />,
      url: 'https://linkedin.com/in/shivanshunegi',
    },
    {
      icon: <FaTiktok className='w-5 h-5' />,
      url: 'https://tiktok.com/@shivanshunegi',
    },
    {
      icon: <FaXTwitter className='w-5 h-5' />,
      url: 'https://twitter.com/shivanshunegi',
    },
    {
      icon: <FaFacebook className='w-5 h-5' />,
      url: 'https://facebook.com/shivanshunegi',
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='flex flex-col md:flex-row justify-between'>
        {/* Logo and Copyright */}
        <div className='mb-8 md:mb-0'>
          <Link href='/' className='inline-block'>
            <h2 className='text-2xl font-bold'>Shivanshu Negi</h2>
          </Link>
          <p className='text-gray-500 mt-2'>
            © {currentYear} Shivanshu Negi. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className='flex gap-4 mt-6'>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors'
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Sections */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16'>
          {Object.entries(sections).map(([title, links]) => (
            <div key={title}>
              <h3 className='font-semibold text-gray-900 mb-4'>{title}</h3>
              <ul className='space-y-3'>
                {Object.entries(links).map(([label, url]) => (
                  <li key={label}>
                    <Link
                      href={url}
                      className='text-gray-600 hover:text-gray-900 transition-colors'
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
    </div>
  );
};

export default Navigation;
