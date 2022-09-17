import './app.css';
import { About } from './components/about';
import { Activity } from './components/activity';
import Course from './components/course';
import { Footer } from './components/footer';
import { Form } from './components/form';
import { Navbar } from './components/header';
import { Home } from './components/home';
import { Register } from './components/register';
import { Fade } from 'react-awesome-reveal';
import { Patronize } from './components/patronize';

function App() {
  return (
    <div className="body_complete">
      <Navbar />

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
      <Fade triggerOnce direction="up" delay={100}>
        <Patronize />
      </Fade>
      <Footer />
    </div>
  );
}

export default App;
