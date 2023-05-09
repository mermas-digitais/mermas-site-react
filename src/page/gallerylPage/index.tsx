import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/footer';
import GalleryGrid from '../../components/galleryGrid';
import { Navbar } from '../../components/menu/header';

export default function GalleryPage() {
  const [showGallery, setShowGallery] = React.useState(false);

  return (
    <>
      <GalleryGrid />
      {/* <Outlet /> */}
    </>
  );
}
