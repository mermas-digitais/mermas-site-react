import { useRef } from 'react';
import { Attention } from '../../components/article/attention';
import { Fade } from 'react-awesome-reveal';
import { Articles } from '../../components/article/articles';

export default function ArticlePage() {
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
          <Articles refName={scrollDown} />
        </Fade>
        
      </div>
    </section>
  );
}
