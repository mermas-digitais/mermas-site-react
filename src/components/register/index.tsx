import { SealCheck } from '@phosphor-icons/react';
import ButtonSecond from '../buttons/second';

export function Register() {
  return (
    <section className="delay_distance w-[100vw]">
      <div className="flex container items-end justify-between padding">
        <div>
          <img
            className="w-80"
            src="../../../public/image/menina.svg"
            alt="Menina anunciando os requisitos"
          />
        </div>
        <div>
          <h3>
            Gostou?? Perde tempo não miga
            <br />
            Vem ver como participar
          </h3>

          <ul className="flex flex-col gap-2 pb-8">
            <li className="flex flex-row gap-4">
              <SealCheck size={24} weight="fill" color="#9854CB" />
              <p>Ser Menina</p>
            </li>

            <li className="flex flex-row gap-4">
              <SealCheck size={24} weight="fill" color="#9854CB" />
              <p>Ser Estudante do Ensino Médio</p>
            </li>
            <li className="flex flex-row gap-4">
              <SealCheck size={24} weight="fill" color="#9854CB" />
              <p>Ser Estudante da Rede Estadual</p>
            </li>
          </ul>
          <ButtonSecond to="/" name="Inscreva-se" />
        </div>
      </div>
    </section>
  );
}
