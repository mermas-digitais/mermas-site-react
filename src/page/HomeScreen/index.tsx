import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal';
import { Form } from 'react-router-dom';
import { About } from '../../components/about';
import { Activity } from '../../components/activity';
import Course from '../../components/course';
import { Footer } from '../../components/footer';
import Gallery from '../../components/gallery';
import { Navbar } from '../../components/header';
import { Home } from '../../components/home';
import { Patronize } from '../../components/patronize';
import { Register } from '../../components/register';

import './styles.css'

export const HomeScreen = () => {
    const [showGallery] = useState(true);

  return (
    <div className="body_complete">
      <Navbar showGallery={showGallery} showGalleryEllipse={true} />

      <>
        <div className="container-home">
          <Home />
        </div>
        <Fade triggerOnce direction="up" delay={100}>
          <About />
        </Fade>

        <Fade triggerOnce direction="up" delay={100}>
          <Course />
        </Fade>
        <Fade triggerOnce direction="up" delay={100}>
          <Activity />
        </Fade>
        <Fade triggerOnce direction="up" delay={100}>
          <Register />
        </Fade>
        <Fade triggerOnce direction="up" delay={100}>
          <Form />
        </Fade>
        <Fade>
          <Gallery />
        </Fade>
        <Fade triggerOnce direction="up" delay={100}>
          <Patronize />
        </Fade>
      </>
      <div className="containerFooter">
        <Footer />
      </div>
    </div>
  );
}
