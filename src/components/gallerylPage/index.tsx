import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../footer';
import GalleryGrid from '../galleryGrid';
import { Navbar } from '../header';

export default function GalleryPage() {
  const [showGallery, setShowGallery] = React.useState(false);

  const refMount = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowGallery(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    if (refMount.current) {
      observer.observe(refMount.current);
    }

    return () => {
      observer.unobserve(refMount.current as any);
      setShowGallery(false);
    };
  }, []);
  console.log(showGallery);

  return (
    <div ref={refMount}>
      <Navbar showGallery={showGallery} />
      <GalleryGrid />
      <Outlet />
      <Footer />
    </div>
  );
}
