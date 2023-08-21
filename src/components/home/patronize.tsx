import imgIfma from '../../../public/assets/logomarcas/ifma.svg';
import imgMdSbc from '../../../public/assets/logomarcas/mdsbc.png';
import imgMp from '../../../public/assets/logomarcas/mp.svg';
import imgJupter from '../../../public/assets/logomarcas/jupter.png';
import imgSeduc from '../../../public/assets/logomarcas/seduc.png';

export const Patronize = () => {
  return (
    <section className="delay w-[100vw] flex justify-center">
      <ul className="max-w-[50rem] flex justify-around gap-2 items-center bg-white w-full px-6 py-4 rounded-2xl shadow-pop
      max-sm:flex-row max-md:max-w-[90%] max-sm:py-2">
        <li>
          <img
            className="h-16 object-contain"
            src={imgIfma}
            alt="Logo do Instituto Federal do Maranhão, Campus Imperatriz"
          />
        </li>
        <li>
          <img
            className="h-16 object-contain"
            src={imgMdSbc}
            alt="Logo do Programa Meninas Digitais"
          />
        </li>
        <li>
          <img
            className="h-16 object-contain"
            src={imgSeduc}
            alt="Logo do SEDUC - Secretaria de Estado da Educação do Maranhão"
          />
        </li>
        <li>
          <img
            className="h-16 object-contain"
            src={imgMp}
            alt="Logo do Ministério Público do Maranhão"
          />
        </li>
        <li>
          <img
            className="h-16 object-contain"
            src={imgJupter}
            alt="Logo da Júpter Internet"
          />
        </li>
        
      </ul>
    </section>
  );
};
