import { SortAscending } from '@phosphor-icons/react';
import { useRef } from 'react';
import styles from './styles.module.css';

export default function Team() {
  const scrollDowwn = useRef(null);

  const handleScroll = () => {
    //roll down
    // scrollDowwn.current.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    //   // inline: 'nearest',
    // });
  };

  return (
    <section id={styles['team']} className="w-[100vw]">
      <div className="container flex justify-between items-start gap-16">
        <div className="w-[35%]">
          <div>
            <h3 className="w-72">
              Equipe das{' '}
              <i className="not-italic text-pink-500">Mermãs Digitais</i>
            </h3>
            <span>
              Vem conhecer as mermãs e os mermãos que fazem isso acontecer
            </span>
          </div>

          <div
            className="flex items-center justify-end gap-2 my-8 opacity-50 hover:opacity-80  transform duration-300 cursor-pointer"
            onClick={handleScroll}
          >
            <span className="text-sm">Rola para baixo</span>
            <SortAscending size={20} color="#545454" />
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-start w-full cursor-pointer hover:-translate-y-1 transition-all duration-300">
              <div
                className="w-[80%] bg-pink-100 py-3 px-5 rounded-r-2xl rounded-t-2xl relative
            before:w-2 before:h-4 before:absolute before:bottom-[-18px] before:left-0 
            before:border-r-[30px] before:border-r-transparent
            before:border-t-pink-100 before:border-t-[20px]
            hover:shadow-md hover:shadow-gray-50
           "
              >
                <div className="flex gap-4 items-center">
                  <div>
                    <img
                      className="rounded-full w-10 h-10 object-cover"
                      src="./image/imageProfile.jpeg"
                      alt=""
                    />
                  </div>
                  <span className="text-xs w-[75%]">
                    Olá! Sou <strong>Simone</strong>, a coordenadora do projeto.
                    Vem conversar comigo aqui!
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-end cursor-pointer hover:-translate-y-1 transition-all duration-300">
              <div
                className="w-[80%] bg-pink-100 py-3 px-5 rounded-l-2xl rounded-t-2xl relative
            before:w-2 before:h-4 before:absolute before:bottom-[-18px] before:right-0 
            before:border-l-[30px] before:border-l-transparent
            before:border-t-pink-100 before:border-t-[20px]
            hover:shadow-md hover:shadow-gray-50"
              >
                <div className="flex gap-4 items-center">
                  <span className="text-xs w-[75%] text-end">
                    E eu sou <strong>Thiago</strong>, o coordenador do projeto.
                    Vem conversar comigo aqui!
                  </span>
                  <div>
                    <img
                      className="rounded-full w-10 h-10 object-cover"
                      src="./image/imageProfile.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-[75%]" ref={scrollDowwn}>
          <div
            className=""
          >
            <div className="relative bg-purple-300 w-fit">
              <img
                className="object-cover w-44 h-52 rounded-xl"                
                src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/1/1649110304012.jpg"
                alt="Ímagem de um membro da equipe"
              />
              <address className="flex flex-col
              absolute bottom-0 m-2 leading-3
              text-[10px] font-poppins not-italic text-white">
                <b>Nome</b>
                <b>Sobrenome</b>
                <strong className="font-normal">Coordenadora</strong>
                <a href="mailto:webmaster@example.com" className="">test@gmail.com</a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
