import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import { Inter } from 'next/font/google';
import './globals.css';

import Navigation from '../components/navigation/Index';
import Footer from '@/components/footer/Index';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sabilist',
  description: 'Let the right Artisan help, we sabi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
