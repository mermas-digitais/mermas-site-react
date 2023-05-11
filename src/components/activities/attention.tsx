import { CaretDoubleDown } from "@phosphor-icons/react";
type AttentionProps = {
    clickScroll: () => void;
}
export const Attention = ({clickScroll}:AttentionProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h4>Tecnologia & Inovação</h4>
      <h2>Desenvolvimento Web</h2>
      <p className="md:w-[32rem] text-center">
        Vem conhecer na prática o universo tecnologico! Você vai estudar,
        praticar e se aventurar com as Mermãs DIgitais.
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
