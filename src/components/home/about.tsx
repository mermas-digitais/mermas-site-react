import { CaretRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import imgLogo from '../../../public/assets/logo.svg';
import imgBackground from '../../../public/assets/ondas.svg';

export const About = () => {
  return (
    <>
      <section
        className="relative w-[100vw] z-10 flex justify-center "
      >
        <div className="w-full absolute z-[-1]">
          <img className="object-cover w-full" src={imgBackground} alt="Astronauta" />
        </div>

        <div className="w-full h-full padding flex container flex-row items-center justify-between">
          <div className="w-full max-w-[30rem]">
            <img
              src={imgLogo}
              alt="Logo do Projeto: Uma menina mergulada na tecnologia"
            />
          </div>
          <div className="ml-20">
            <div className="w-[36rem] ml-auto text-left">
              <h3>Éguas, ainda não conhece?</h3>
              <p className="pb-6">
                O Mermãs Digitais é um projeto de extensão do IFMA - Campus
                Imperatriz, parceiro do Programa Meninas Digitais da Sociedade
                Brasileira de Computação, que tem o objetivo incentivar e apoia
                meninas do ensino médio da rede pública à despertar o interesse
                nos cursos de Computação e tecnologias relacionadas.
              </p>
              <Link 
                to="/sobre"
                className="flex items-center gap-1 pb-6 w-80 border-b-[1px] border-purple-100 font-poppins font-semibold text-base text-pink-500"
              >
                Conheça nossa história
                <CaretRight size={20} weight="bold"/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
