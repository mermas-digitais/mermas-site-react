import { Link } from 'react-router-dom';
import { CardActivity } from '../../individualComponent/cardActivity';
import './index.css';

export function Activity() {
  return (
    <section id="activity">
      <div className="container">
        <div className="activity_head easing_title">
          <div className="head_title">
            <i className="icon">
              <img src="./image/Group 29.svg" alt="Ícone de foguete" />
            </i>
            <h2 className="title">
              Nem te conto, olha o que as Mermãs prepararam
            </h2>
          </div>
          <div className="head_button">
            <Link to="/atividades">
              <button className="icon button_next">
                <img src="./image/arrow.svg" alt="Ícone de foguete" />
              </button>
            </Link>
          </div>
        </div>

        <div className="activity_box delay_distance">
          <CardActivity
            image="./image/Group 29.svg"
            alt="Ícone de foguete"
            title="Palestras"
            description="Serão compartilhadas experiências pessoais sobre a atuação e importância das mulheres na área de STREM."
            button="4 Palestras"
          />

          <CardActivity
            image="./image/Group 29.svg"
            alt="Ícone de foguete"
            title="Mesa Redonda"
            description="Em parceria com outras mulheres incríveis ocorrerá um debate sobre a participação de mulheres nas ciências exatas ao longo do tempo."
            button="1 Mesa redonda"
          />

          <CardActivity
            image="./image/Group 29.svg"
            alt="Ícone de foguete"
            title="Minicursos"
            description="Serão apresentados conceitos e ferramentas básicos do universo tecnologico como introdução a programação, modelagem 3D e hardware."
            button="8 Minicursos"
          />

          <CardActivity
            image="./image/Group 29.svg"
            alt="Ícone de foguete"
            title="Oficinas"
            description="Com aulas dinâmicas e introdutorias sobre programação, serão produzidos sites, jogos, robótica e podcast."
            button="3 Oficinas"
          />
        </div>
      </div>
    </section>
  );
}
