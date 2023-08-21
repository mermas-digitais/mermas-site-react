import { Fade } from 'react-awesome-reveal';
import { About } from '../../components/home/about';
import Course from '../../components/home/course';
import { Form } from '../../components/home/form';
import { Home } from '../../components/home/attention';
import { Patronize } from '../../components/home/patronize';
import { Register } from '../../components/home/register';



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
    </div>
  );
};
