import { Fade } from 'react-awesome-reveal';
import ButtonPrimary from '../buttons/primary';
import imgMapa from '../../../public/assets/mapa.svg';
import imgPerson1 from '../../../public/assets/person1.png';
import imgPerson2 from '../../../public/assets/person2.png';



export const Home = () => {
  return (
    <>
      <section
        className="w-[100vw] flex justify-center mb-12"
      >
        <div className='flex flex-row container items-center justify-between gap-8'>
          <div className="w-full">
            <h1>
              Ei mermã, <br />
              Vem ser digital!
            </h1>
            <p className="mt-4 mb-4 max-w-[28.5rem] text-base">
              Incentivamos meninas a mergulharem no universo tecnologico e se
              tornarem mestres do seu conhecimento
            </p>
            <ButtonPrimary to='/programa' name="Participar agora!" />
          </div>

          <div className="w-full">
            <div className="min-w-[35rem] relative">
              <div className="flex h-[26rem] justify-center items-center ml-8 bg-[url('./assets/circulo.svg')] bg-center bg-contain bg-no-repeat w-full ">
                <img
                  className="h-[24rem]"
                  src={imgMapa}
                  alt="Mapa do Maranhão apontando para a cidade de Imperatriz"
                />
              </div>

              <Fade cascade damping={0.1} delay={100}>
                <div className="absolute top-12 left-2 bg-white rounded-full shadow-pop p-2 flex flex-row items-center gap-2">
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

                <div className="absolute bottom-12 right-2 bg-white rounded-full shadow-pop p-2 flex flex-row items-center gap-2">
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
