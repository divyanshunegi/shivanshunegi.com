import '@/styles/globals.css';

export const metadata = {
  title: 'Shivanshu Negi | Filmmaker',
  description:
    'Independent filmmaker based in India, specializing in documentary and narrative storytelling.',
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
