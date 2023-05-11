import { CaretRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import imgLogo from '../../../public/assets/logo.svg';
import imgBackground from '../../../public/assets/ondas.svg';

export const About = () => {
  return (
    <>
      <section
        className="relative w-[100vw] z-10 flex justify-center 
        "
      >
        <div className="w-full absolute z-[-1]">
          <img className="object-cover w-full" src={imgBackground} alt="Astronauta" />
        </div>

        <div className="padding flex container flex-row items-center justify-between gap-12 
        max-lg:flex-col">
          <div className="sm:w-[30rem]
          max-md:max-w-96">
            <img
            className="object-contain w-full"
              src={imgLogo}
              alt="Logo do Projeto: Uma menina mergulada na tecnologia"
            />
          </div>
          <div>
            <div className="w-[30rem] ml-auto text-left
            max-lg:w-full">
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
                className="flex items-center gap-1 active:bg-transparent pb-6 w-80 border-b-[1px] border-purple-100 font-poppins font-semibold text-pink-500"
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
