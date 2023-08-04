import { CaretDoubleDown } from '@phosphor-icons/react';
import { CardInfor } from '../cards/infor';
type AttentionProps = {
  clickScroll: () => void;
};
export const Attention = ({ clickScroll }: AttentionProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h4>Artigos</h4>
      <h2>Partiu W.I.T 2023!</h2>
      <p className="md:w-[32rem] text-center">
        Orgulhosamente, 5 trabalhos do Mermãs Digitais foram aceitos no Women in
        Technology, um evento que impulsiona a diversidade de gênero na área de
        TI.
      </p>
      <div
        onClick={clickScroll}
        className="cursor-pointer my-8 hover:translate-y-1 transition-all duration-300"
      >
        <CaretDoubleDown size={28} color="#ff4a97" />
      </div>

    </div>
  );
};
