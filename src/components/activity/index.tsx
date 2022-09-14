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
          <div className={styles.box}>
            <div className={styles.box_head}>
              <i>
                <img src="./image/Group 29.svg" alt="Ícone de foguete" />
              </i>
              <h4>Palestras</h4>
            </div>
            <div className={styles.box_body}>
              <p>
                Serão compartilhadas experiências pessoais sobre a atuação e
                importância das mulheres na área de STREM.
              </p>
            </div>
            <div className={styles.box_button}>
              <button>4 Palestras</button>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.box_head}>
              <i>
                <img src="./image/Group 29.svg" alt="Ícone de foguete" />
              </i>
              <h4>Mesa Redonda</h4>
            </div>
            <div className={styles.box_body}>
              <p>
                Em parceria com outras mulheres incríveis ocorrerá um debate
                sobre a participação de mulheres nas ciências exatas ao longo do
                tempo.
              </p>
            </div>
            <div className={styles.box_button}>
              <button>1 Mesa redonda</button>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.box_head}>
              <i>
                <img src="./image/Group 29.svg" alt="Ícone de foguete" />
              </i>
              <h4>Minicursos</h4>
            </div>
            <div className={styles.box_body}>
              <p>
                Serão apresentados conceitos e ferramentas básicos do universo
                tecnologico como introdução a programação, modelagem 3D e
                hardware.
              </p>
            </div>
            <div className={styles.box_button}>
              <button>8 Minicursos</button>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.box_head}>
              <i>
                <img src="./image/Group 29.svg" alt="Ícone de foguete" />
              </i>
              <h4>Oficinas</h4>
            </div>
            <div className={styles.box_body}>
              <p>
                Com aulas dinâmicas e introdutorias sobre programação, serão
                produzidos sites, jogos, robótica e podcast.
              </p>
            </div>
            <div className={styles.box_button}>
              <button>3 Oficinas</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
