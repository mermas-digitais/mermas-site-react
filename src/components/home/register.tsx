import { SealCheck } from '@phosphor-icons/react';
import imgMenina from '../../../public/assets/menina.svg';
import ButtonSecond from '../buttons/second';

export function Register() {
  return (
    <section className="delay_distance w-[100vw]">
      <div className="flex container items-center justify-center gap-16 padding
      max-lg:flex-col">
        <div>
          <img
            className="w-[28rem]"
            src={imgMenina}
            alt="Menina anunciando os requisitos"
          />
        </div>
        <div className="w-[50%] max-lg:w-full">
          <h4>Perde tempo não, miga!</h4>
          <h3>Se você gostou, confira os requisitos para participar:</h3>

          <ul className="flex flex-col gap-2 pb-8">
            <li className="flex flex-row gap-4 items-center">
              <SealCheck size={24} weight="fill" color="#9854CB" />
              <p>Ser Menina</p>
            </li>

            <li className="flex flex-row gap-4 items-center">
              <SealCheck size={24} weight="fill" color="#9854CB" />
              <p>Ser Estudante do Ensino Médio</p>
            </li>
            <li className="flex flex-row gap-4 items-center">
              <SealCheck size={24} weight="fill" color="#9854CB" />
              <p>Ser Estudante da Rede Estadual</p>
            </li>
          </ul>
          <div className='w-fit'>
            <ButtonSecond to="/" name="Acessar edital" />
          </div>
        </div>
      </div>
    </section>
  );
}
