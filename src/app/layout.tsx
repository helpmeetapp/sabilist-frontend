import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import { Outfit } from 'next/font/google';

import './globals.css';

import Navigation from '@/components/navigation/Index';
import Footer from '@/components/footer/Index';

export const metadata: Metadata = {
  title: 'Sabilist',
  description: 'Let the right Artisan help, we sabi',
};

const outfit = Outfit({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
