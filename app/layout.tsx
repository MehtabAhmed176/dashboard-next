import '@/app/ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Here the the whole UI is mounted to the HTML Body Tag
      equivalent to root mount in cra app
      */}
    <body >{children}</body>
    </html>
  );
}
