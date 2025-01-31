import '@/styles/globals.css';

export const metadata = {
  title: 'Shivanshu Negi | Filmmaker',
  description:
    'Independent filmmaker based in India, specializing in documentary and narrative storytelling.',
  openGraph: {
    title: 'Shivanshu Negi | Filmmaker',
    description:
      'Independent filmmaker based in India, specializing in documentary and narrative storytelling.',
    images: ['/images/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivanshu Negi | Filmmaker',
    description:
      'Independent filmmaker based in India, specializing in documentary and narrative storytelling.',
    images: ['/images/og.jpg'],
  },
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
