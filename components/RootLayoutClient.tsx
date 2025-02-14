'use client';

import Providers from './Providers';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='transition-colors duration-200 font-["Helvetica_Neue",Helvetica,Arial,sans-serif]'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
