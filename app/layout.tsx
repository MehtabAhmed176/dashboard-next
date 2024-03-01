import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
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
    <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
