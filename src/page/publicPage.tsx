import React, { useRef, useState } from 'react';
import { useOutlet } from 'react-router-dom';

import { Footer } from '../components/footer';

import { Navbar } from '../components/menu/header';

export const PublicPage = () => {
  const outlet = useOutlet();

  const scrollDown = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    scrollDown.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar clickScroll={handleScroll} />
      <main ref={scrollDown} className="flex overflow-hidden w-full justify-center items-center py-32">
        {outlet}
      </main>
      <Footer />
    </>
  );
};
