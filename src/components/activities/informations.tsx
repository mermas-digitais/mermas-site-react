import { CardInfor } from "../cards/infor";

export const Informations = () => {
  return (
    <div className="py-4 flex flex-row gap-8 max-md:flex-col">
      <CardInfor
        title="6 meses"
        description="O curso terá duração de 6 meses, com aulas uma vez por semana"
      />
      <CardInfor
        title="Presencial"
        description="As aulas serão presenciais, no Instituto Federal do Maranhão, Campus Imperatriz"
      />
      <CardInfor
        title="Vespertino"
        description="As aulas serão ministradas no período vespertino, das 13h às 17h"
      />
    </div>
  );
};
