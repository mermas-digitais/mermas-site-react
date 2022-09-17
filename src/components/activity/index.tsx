import { CardActivity } from '../../individualComponent/cardActivity';
import styles from './index.module.css';

export function Activity() {
  return (
    <section id={styles['activity']}>
      <div className={styles.container}>
        <div className={`${styles.activity_head} ${styles.easing_title}`}>
          <div className={styles.head_title}>
            <i className={styles.icon}>
              <img src="./image/Group 29.svg" alt="Ícone de foguete" />
            </i>
            <h2 className={styles.title}>
              Nem te conto, olha o que as Mermãs prepararam
            </h2>
          </div>
          <div className={styles.head_button}>
            <button className={`${styles.icon} ${styles.button_next}`}>
              <img src="./image/arrow.svg" alt="Ícone de foguete" />
            </button>
          </div>
        </div>

        <div className={`${styles.activity_box} ${styles.delay_distance}`}>
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
