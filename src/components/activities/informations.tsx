import { CardInfor } from "../cards/infor";

export const Informations = () => {
  return (
    <div className="py-4 flex flex-row gap-8 max-md:flex-col">
      <CardInfor
        title="Duração"
        description="Programa deintrodução ao desenvolvimento web. Você vai estudar e
                praticar com as Mermãs Digitais"
      />
      <CardInfor
        title="Modalidade"
        description="Programa deintrodução ao desenvolvimento web. Você vai estudar e
                praticar com as Mermãs Digitais"
      />
      <CardInfor
        title="Turno"
        description="Programa deintrodução ao desenvolvimento web. Você vai estudar e
                praticar com as Mermãs Digitais"
      />
    </div>
  );
};
