import { Medal } from '@phosphor-icons/react';
import imgCertificado from '../../../public/assets/certificado.png';

export const Certificate = () => {
  return (
    <div className='relative flex flex-col'>
      <div className="bg-pink-100 md:p-16 p-8 rounded-3xl">
        <div className="flex flex-col gap-4">
          <div className="buttonCircle">
            <Medal size={32} color="#ff4a97" />
          </div>
          <div className="max-lg:w-64 lg:w-[28rem] max-sm:w-full">
            <h3>Certificado de Conclusão</h3>
            <p>
              No final do programa vocẽ receberar um certificado de conclusão
            </p>
          </div>
        </div>
      </div>
      <div className="w-80 absolute max-md:invisible right-20 bottom-0">
          <img
            src={imgCertificado}
            className="object-cover"
            alt="Imagem de um Certificado"
          />
      </div>
    </div>
  );
};
