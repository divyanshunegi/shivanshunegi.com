import './globals.css';

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
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
