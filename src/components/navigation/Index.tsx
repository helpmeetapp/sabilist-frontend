'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';
import AboutUsNavigation from './AboutUs';
import LandingNavigation from './Landing';
import Categories from '../Categories';

import LoginModal from '../LoginModal';
import VerifyModal from '../VerifyModal';
import ResendOtpModal from '../ResendOtpModal';
import RegisterModal from '../RegisterModal';

export default function IndexNavigation() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isOtpModalOpen, setOtpModalOpen] = useState(false);
  const [isResendOtpModalOpen, setResendOtpModalOpen] = useState(false);

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
    setLoginModalOpen(false);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
    setRegisterModalOpen(false);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openOtpModal = () => {
    setOtpModalOpen(true);
    setRegisterModalOpen(false);
  };

  const closeOtpModal = () => {
    setOtpModalOpen(false);
  };

  const openResendOtpModal = () => {
    setResendOtpModalOpen(true);
  };

  const closeResendOtpModal = () => {
    setResendOtpModalOpen(false);
  };

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
      <LandingNavigation isVisible={isVisible} onLoginClick={openLoginModal} />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
        openLoginModal={openLoginModal}
        openOtpModal={openOtpModal}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        openRegisterModal={openRegisterModal}
      />

      <VerifyModal
        isOpen={isOtpModalOpen}
        onClose={closeOtpModal}
        openLoginModal={openLoginModal}
        openResendOtpModal={openResendOtpModal}
      />

      <ResendOtpModal
        isOpen={isResendOtpModalOpen}
        onClose={closeResendOtpModal}
        openOtpModal={openOtpModal}
      />

      <Categories isVisible={isVisible} />
    </>
  ) : pathname === '/about-us' ? (
    <AboutUsNavigation />
  ) : (
    ''
  );
}
