import './globals.css';

export const metadata = {
  title: 'Shivanshu Negi | Filmmaker',
  description:
    'Independent filmmaker based in India, specializing in documentary and narrative storytelling that explores human connections and cultural narratives.',
  keywords:
    'filmmaker, director, documentary, India, storytelling, film production',
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
