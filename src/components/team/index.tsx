import { SortAscending } from '@phosphor-icons/react';
import { useRef } from 'react';

export default function Team() {
  const scrollDown = useRef<HTMLDivElement>(null);

  const members = [
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Monitor',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
    {
      name: 'Lailla Galeno',
      image: './assets/person1.png',
      role: 'Coordenadora',
      email: 'laillagalenoitz@gmail.com',
    },
  ];

  //função para rolar somente uma div especifica
  const handleScroll = () => {
    // roll down
    scrollDown.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      // blockStart: 4,
      // inline: 'nearest',
    });
  };

  return (
    <section className="w-full">
      <div className="container flex max-lg:flex-col justify-between items-start gap-16">
        <div className="lg:w-[35%]  w-full ">
          <div className="max-lg:text-center">
            <h3 className="lg:w-72">
              Equipe das{' '}
              <i className="not-italic text-pink-500 ">Mermãs Digitais</i>
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
                className="max-sm:w-[80%] lg:w-[80%] sm:w-[50%] bg-pink-100 py-3 px-5 rounded-r-2xl rounded-t-2xl relative
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
                      src="./assets/imageProfile.jpeg"
                      alt="Imagem de perfil do coordenador do projeto"
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
                className="max-sm:w-[80%] lg:w-[80%] sm:w-[50%] bg-pink-100 py-3 px-5 rounded-l-2xl rounded-t-2xl relative
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
                      src="./assets/imageProfile.jpeg"
                      alt="Imagem de perfil do coordenador do projeto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[75%] h-[100vh] relative ">
          <div className="w-full overflow-y-scroll scroller scroll-smooth h-full">
            <div
              className="mx-2 my-8 justify-center grid grid-rows-[0.7rem]  
              
              max-sm:grid-cols-2
              max-sm:[&>*:nth-child(-n+2):nth-child(2n+1)]:row-start-2
              max-sm:[&>*:nth-child(-n+2):nth-child(2n)]:row-start-1
              
              sm:grid-cols-3
              sm:[&>*:nth-child(-n+3):nth-child(2n+1)]:row-start-3
              sm:[&>*:nth-child(-n+3):nth-child(2n)]:row-start-1

              md:grid-cols-4
              md:[&>*:nth-child(-n+4):nth-child(2n+1)]:row-start-4
              md:[&>*:nth-child(-n+4):nth-child(2n)]:row-start-1"
            >
              {members.map((member, index) => (
                <div
                  key={index}
                  className="row-end-20
            relative border-solid border-4 rounded-2xl 
            border-transparent hover:border-purple-500 transform duration-300 cursor-pointer"
                >
                  <img
                    className="object-cover w-full h-full rounded-xl"
                    src={member.image}
                    alt="Ímagem de um membro da equipe"
                  />
                  <address
                    className="flex flex-col z-10
              absolute bottom-0 m-2 leading-3
              text-xs font-poppins not-italic text-white"
                  >
                    <b>{member.name}</b>
                    <strong className="font-normal">{member.role}</strong>
                    <a href="mailto:webmaster@example.com" className="text-xs w-full break-all">
                      {member.email}
                    </a>
                  </address>
                  <div
                    className="rounded-xl absolute top-0 w-full h-full 
                bg-gradient-to-b from-transparent to-[#22012c]"
                  ></div>
                </div>
              ))}
            </div>
            <div ref={scrollDown} className="opacity-0"></div>
          </div>
          <div className="bg-[url('/assets/ondasTimer.svg')] mx-2 bg-no-repeat -top-8 z-10 w-full h-16 absolute right-0"></div>
          <div className="bg-[url('/assets/ondasTimer.svg')] mx-2 bg-no-repeat rotate-180 -bottom-8 z-10 w-full h-16 absolute right-0"></div>
        </div>
      </div>
    </section>
  );
}
