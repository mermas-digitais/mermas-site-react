import { useRef } from 'react';
import { Attention } from '../../components/activities/attention';
import { Informations } from '../../components/activities/informations';
import { Course } from '../../components/activities/course';
import { Certificate } from '../../components/activities/certificate';
import { Fade } from 'react-awesome-reveal';

export default function ActivitiesPage() {
  const scrollDown = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    scrollDown.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-[100vw] flex justify-center items-center">
      <div className="container">
        <Fade triggerOnce direction="up" delay={100}>
          <Attention clickScroll={handleScroll} />
        </Fade>
        <Fade triggerOnce direction="up" delay={100}>
          <Informations />
        </Fade>
        <Fade triggerOnce direction="up" delay={100}>
          <Course refName={scrollDown} />
        </Fade>
        <Fade triggerOnce direction="up" delay={100}>
          <Certificate />
        </Fade>
      </div>
    </section>
  );
}
