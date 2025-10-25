'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Props {
  children: React.ReactNode;
}

const AOSWrapper: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // whether animation should happen only once while scrolling
      easing: 'ease-in-out',
    });
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
