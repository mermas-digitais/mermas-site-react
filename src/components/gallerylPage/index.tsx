import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../footer';
import GalleryGrid from '../galleryGrid';

export default function GalleryPage() {
  return (
    <>
      <GalleryGrid />
      <Outlet />
      <Footer />
    </>
  );
}
