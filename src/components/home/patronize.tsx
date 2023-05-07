import imgIfma from '../../../public/assets/ifma.svg';
import imgMd from '../../../public/assets/md.png';
import imgSbc from '../../../public/assets/sbclogo.png';

export const Patronize = () => {
  return (
    <section className="delay w-[100vw] flex justify-center">
      <ul className="max-w-[50rem] flex justify-around gap-8 items-center bg-white w-full px-12 py-4 rounded-2xl shadow-pop">
        <li>
          <img
            className="h-12"
            src={imgIfma}
            alt="Logo do Instituto Federal do Maranhão, Campus Imperatriz"
          />
        </li>
        <li>
          <img
            className="h-12"
            src={imgMd}
            alt="Logo do Programa Meninas Digitais"
          />
        </li>
        <li>
          <img
            className="h-16"
            src={imgSbc}
            alt="Logo da Sociedade Brasileira de Computação"
          />
        </li>
      </ul>
    </section>
  );
};
