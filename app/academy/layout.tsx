export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='min-h-screen bg-gray-900'>{children}</div>;
}
