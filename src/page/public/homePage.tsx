import { Fade } from 'react-awesome-reveal';
import { About } from '../../components/home/about';
import Course from '../../components/home/course';
import { Form } from '../../components/home/form';
import Gallery from '../../components/gallery';
import { Home } from '../../components/home/attention';
import { Patronize } from '../../components/home/patronize';
import { Register } from '../../components/home/register';
import { Questions } from '../../components/home/questions';


export const HomePage = () => {

  return (
    <div className="flex flex-col items-center justify-center">
      <Fade triggerOnce direction="up" delay={100}>
        <Home />
      </Fade>
      <Fade triggerOnce direction="up" delay={100}>
        <About />
      </Fade>
      <Fade triggerOnce direction="up" delay={100}>
        <Patronize />
      </Fade>
      <Fade triggerOnce direction="up" delay={100}>
        <Course />
      </Fade>
      <Fade triggerOnce direction="up" delay={100}>
        <Register />
      </Fade>
      <Fade triggerOnce direction="up" delay={100}>
        <Form />
      </Fade>
      {/* <Fade triggerOnce direction="up" delay={100}>
        <Questions/>
      </Fade> */}

      {/* <Fade triggerOnce direction="up" delay={100}>
          <Gallery />
        </Fade> */}
    </div>
  );
};
