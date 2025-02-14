import './globals.css';

import CircularFavicon from '@/components/CircularFavicon';
import Providers from '@/components/Providers';

export const metadata = {
  title: 'Shivanshu Negi',
  description:
    'Doctor turned Entrepreneur, YouTuber, and Author. Join me on my journey of productivity and personal growth.',
  keywords:
    'entrepreneur, youtuber, doctor, productivity, personal growth, lifenotes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function updateFavicon() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const img = document.getElementById('favicon-source');
                
                if (img && ctx) {
                  canvas.width = 32;
                  canvas.height = 32;
                  
                  ctx.beginPath();
                  ctx.arc(16, 16, 16, 0, 2 * Math.PI);
                  ctx.closePath();
                  ctx.clip();
                  
                  ctx.drawImage(img, 0, 0, 32, 32);
                  
                  const link = document.createElement('link');
                  const oldLinks = document.querySelectorAll('link[rel="icon"]');
                  oldLinks.forEach(e => e.parentNode.removeChild(e));
                  
                  link.id = 'dynamic-favicon';
                  link.rel = 'icon';
                  link.href = canvas.toDataURL();
                  document.head.appendChild(link);
                }
              }
              document.addEventListener('DOMContentLoaded', function() {
                const img = document.getElementById('favicon-source');
                if (img) {
                  if (img.complete) {
                    updateFavicon();
                  } else {
                    img.addEventListener('load', updateFavicon);
                  }
                }
              });
            `,
          }}
        />
      </head>
      <body className='transition-colors duration-200 font-["Helvetica_Neue",Helvetica,Arial,sans-serif]'>
        <CircularFavicon />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
