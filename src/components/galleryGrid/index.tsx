import { ArrowLineDown, MagnifyingGlass } from '@phosphor-icons/react';
import ButtonSecondQuery from '../buttons/secondQuery';
import imgEtiqueta from '../../../public/assets/etiqueta.png';
import { PostType } from '../../services/types';
import { useEffect, useState } from 'react';
import api from '../../services/api';

const iterable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function GalleryGrid() {

  // const postData = useGet<PostType>("getPost");

  const [dateAll, setDateAll] = useState<PostType[]>([]);

  useEffect(() => {
    api.get(`/getPost/`)
      .then(response => {
        console.log(response);
        setDateAll(response.data) ;
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section className="container flex flex-col items-center justify-center gap-[6rem]">
      <div className="bg-pink-100 rounded-3xl w-full relative ">
        <div className="p-12 text-center w-full flex flex-col items-center justify-center">
          <h3 className="mb-4">
            Galeria das{' '}
            <i className="not-italic text-pink-500">Mermãs Digitais</i>
          </h3>
          <div className="sm:w-72">
            <span>
              Diga Xis! E vem pra galeria das Mermãs! Veja o que nás anda
              aprontando ;D
            </span>
          </div>
        </div>

        <div className="absolute w-full -bottom-6 flex justify-center">
          <div className="relative sm:w-[50%] w-full">
            <input
              type="text"
              placeholder="Buscar evento"
              className="border-none shadow-md bg-white rounded-l-full h-12 pr-20"
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
        className="grid w-full auto-rows-[0.8rem]  gap-4
      grid-cols-2 [&>*:nth-child(odd)]:row-[span_6_/_span_6] [&>*:nth-child(even)]:row-[span_8_/_span_8]
      sm:grid-cols-3 sm:[&>*:nth-child(odd)]:row-[span_8_/_span_8] sm:[&>*:nth-child(even)]:row-[span_10_/_span_10]
      
      lg:grid-cols-250
      lg:[&>*:nth-child(odd)]:row-[span_10_/_span_10]
      lg:[&>*:nth-child(even)]:row-[span_12_/_span_12]
     "
      >
        { Array.isArray(dateAll) && dateAll.length > 0 && dateAll.map((item) => {
          return (
            <div
              className="w-full h-full relative flex flex-col cursor-pointer transition-all duration-300
              hover:shadow-pop transform hover:scale-105 rounded-3xl"
            >
              <div className="w-full h-full">
                <img
                  src={item.PicturePost[0]}
                  alt="Ícone de foguete"
                  className=" relative object-cover rounded-3xl w-full h-full 
                  "
                />
              </div>

              <div className="absolute bottom-0 flex justify-end align-bottom items-end p-2 rounded-3xl opacity-0 hover:opacity-100 w-full h-full transition-all duration-300">
                <img className="w-28" src={imgEtiqueta} alt="" />
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
