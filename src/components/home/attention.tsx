import { Fade } from 'react-awesome-reveal';
import ButtonPrimary from '../buttons/primary';
import imgMapa from '../../../public/assets/mapa.svg';
import imgCirculo from '../../../public/assets/circulo.svg';
import imgPerson1 from '../../../public/assets/person1.png';
import imgPerson2 from '../../../public/assets/person2.png';

export const Home = () => {
  return (
    <>
      <section className="w-[100vw] flex justify-center mb-12">
        <div
          className="flex flex-col  container items-center justify-between gap-16 
        max-sm:flex-col-reverse sm:flex-row"
        >
          <div className="w-full flex flex-col">
            <h1>
              Ei mermã, <br />
              Vem ser digital!
            </h1>
            <p className="max-w-[28.5rem] pt-4 pb-8">
              Incentivamos meninas a mergulharem no universo tecnologico e se
              tornarem mestres do seu conhecimento
            </p>
            <div className="w-fit">
              <ButtonPrimary to="/programa" name="Participar agora!" />
            </div>
          </div>

          <div className="w-full h-full items-center flex justify-center">
            <div
              className="relative 
            max-md:w-[20rem]"
            >
              <div
                className="flex retative justify-center items-center 
              max-lg:ml-8 max-lg:h-80"
              >
                <img
                  className="h-full"
                  src={imgMapa}
                  alt="Mapa do Maranhão apontando para a cidade de Imperatriz"
                />
                <img
                  className="h-full -z-40 absolute"
                  src={imgCirculo}
                  alt=""
                />
              </div>

              <Fade cascade damping={0.1} delay={100}>
                <div className="max-md:-top-10 absolute top-12 left-2 bg-white rounded-full shadow-pop p-2 flex flex-row items-center gap-2">
                  <img
                    className="w-10 h-10 object-cover rounded-full"
                    src={imgPerson1}
                  />
                  <div className="flex flex-col mr-2">
                    <h5>Ana Clara</h5>
                    <span className="text-xs">
                      Foi uma experiência incrivel!
                    </span>
                  </div>
                </div>

                <div className="max-md:bottom-0 absolute bottom-12 right-2 bg-white rounded-full shadow-pop p-2 flex flex-row items-center gap-2">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={imgPerson2}
                  />
                  <div className="flex flex-col mr-2">
                    <h5>Ana Clara</h5>
                    <span className="text-xs">Ameii, sou digital!!</span>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
