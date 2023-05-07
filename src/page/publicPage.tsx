import React, { useState } from 'react';
import {
  useOutlet,
} from 'react-router-dom';

import { Footer } from '../components/footer';

import { Navbar } from '../components/header';


export const PublicPage = () => {
  const outlet = useOutlet();
  const [showGallery] = useState(true);

  return (
    <>
      <Navbar showGallery={showGallery} />
      <main className="flex overflow-hidden w-full justify-center items-center py-32">
        {outlet}
      </main>
      <Footer />
    </>
  );
};
