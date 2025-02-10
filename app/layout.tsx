import './globals.css';

import { ThemeProvider } from '../context/ThemeContext';

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
      <body className='transition-colors duration-200'>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
