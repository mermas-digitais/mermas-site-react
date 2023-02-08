import rocktLogo from '../../../public/image/Group 29.svg';

import './index.css';

type CardActivitysProps = {
  title: string;
  description: string;
  borderColor: string;
};

export const CardActivitys = ({
  title,
  description,
  borderColor,
}: CardActivitysProps) => {
  return (
    <div className="Container_Card" style={{ borderColor: `${borderColor}` }}>
      <div className="Content_Top">
        <div className="Container_img">
          <img className="img_rockt" src={rocktLogo} alt="logo foguete" />
        </div>
        <div className="Container_title">
          <div className="Container_title_card">
            <h2 className="title_card">{title}</h2>
            <span>3 dias</span>
          </div>

          <p className="span_card">{description}</p>
        </div>
      </div>

      <div className="Container_Group">
        <ul className="Content_list">
          <li> Back-end com JavaScript, Node.JS e SQL;</li>
          <li>Estrutura e gerenciamento de dados;</li>
          <li>Programação orientada a objetos;</li>
          <li>Front-end com foco em HTML, CSS, JavaScript e DOM;</li>
          <li>Entre outros assuntos! Terminal, HTTP a fundo e mais!</li>
        </ul>
      </div>
    </div>
  );
};
