'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';
import AboutUsNavigation from './AboutUs';
import LandingNavigation from './Landing';
import Categories from '../Categories';

export default function IndexNavigation() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;

      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return pathname === '/' ? (
    <>
      <LandingNavigation isVisible={isVisible} />
      <Categories isVisible={isVisible} />
    </>
  ) : pathname === '/about-us' ? (
    <AboutUsNavigation />
  ) : (
    ''
  );
}
