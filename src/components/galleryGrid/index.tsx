import { ArrowLineDown, MagnifyingGlass } from '@phosphor-icons/react';
import ButtonSecondQuery from '../buttons/secondQuery';
import imgEtiqueta from '../../../public/assets/etiqueta.png';

const iterable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function GalleryGrid() {
  return (
    <section className="container flex flex-col items-center justify-center gap-[6rem]">
      <div className="bg-pink-100 rounded-3xl w-full relative">
        <div className="p-12 text-center w-full">
          <h3 className="mb-4">
            Galeria das{' '}
            <i className="not-italic text-pink-500">Mermãs Digitais</i>
          </h3>
          <span>
            Diga Xis! E vem pra galeria das Mermãs
            <br />
            Veja o que nás anda aprontando ;D
          </span>
        </div>

        <div className="absolute w-full -bottom-6 flex justify-center">
          <div className="relative w-[50%]">
            <input
              type="text"
              placeholder="Buscar evento"
              className="border-none shadow-md rounded-l-full h-12 pr-20"
            />
            <button
              className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 rounded-r-full p-2 w-16 h-12 flex items-center justify-center 
            absolute top-0 right-0"
            >
              <MagnifyingGlass size={24} color="white" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="grid w-full auto-rows-[0.8rem] grid-cols-250 gap-4
      [&>*:nth-child(odd)]:row-[span_10_/_span_10]
      [&>*:nth-child(even)]:row-[span_12_/_span_12]
     "
      >
        {iterable.map((item) => {
          return (
            <div
              className="w-full h-full relative flex flex-col cursor-pointer transition-all duration-300
              hover:shadow-pop transform hover:scale-105 rounded-3xl"
            >
              <div className="w-full h-full">
                <img
                  src="https://midia.gruposinos.com.br/_midias/jpg/2022/07/02/img_0934-20400876.jpg"
                  alt="Ícone de foguete"
                  className=" relative object-cover rounded-3xl w-full h-full 
                  "
                />
              </div>

              <div className="absolute bottom-0 flex justify-end align-bottom items-end p-2 rounded-3xl opacity-0 hover:opacity-100 w-full h-full transition-all duration-300">
                <img
                  className="w-28"
                  src={imgEtiqueta}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <ButtonSecondQuery isIcon name="Ver mais">
          <ArrowLineDown size={20} weight="bold" color="white" />
        </ButtonSecondQuery>
      </div>
    </section>
  );
}
