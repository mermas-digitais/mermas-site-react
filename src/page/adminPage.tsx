import React, { useState } from 'react';
import {
  useOutlet,
} from 'react-router-dom';

import { Footer } from '../components/footer';

import { Navbar } from '../components/header';


export const AdminPage = () => {
  const outlet = useOutlet();
  const [showGallery] = useState(true);

  return (
    <>
      <Navbar showGallery={showGallery} />
      <main className="flex overflow-hidden w-full justify-center items-center">
        {outlet}
      </main>
      <Footer />
    </>
  );
};
