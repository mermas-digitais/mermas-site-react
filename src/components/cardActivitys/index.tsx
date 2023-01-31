import rocktLogo from '../../../public/image/Group 29.svg';

import './index.css';

export const CardActivitys = () => {
  return (
    <div className="Container_Card">
      <div className="Content_Top">
        <div className="Container_img">
          <img className="img_rockt" src={rocktLogo} alt="logo foguete" />
        </div>
        <div className="Container_title">
          <div className="Container_title_card">
            <h2 className="title_card">Desenvolvimento de jogos</h2>
            <span>3 dias</span>
          </div>

          <p className="span_card">
            Trilha de conhecimento para primeiro contato com o desenvolvimento
            web
          </p>
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
