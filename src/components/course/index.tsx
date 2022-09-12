import './index.css';

export default function Course() {
  return (
    <section id="course">
      <div className="course-image">
        <img src="./image/Rectangle 78 (1).svg" alt="Imagem de fundo" />
      </div>

      <div className="container course-container">
        <div className="course-text">
          <h2 className="title easing_title">
            Olha essa mega oportunidade, Não vai perder ein?
          </h2>

          <p className="easing_text">
            Em 4 etapas serão abertas duas turmas em turnos diferentes para
            meninas do Ensino Médio que desejem aprender um pouco mais sobre
            tecnologia. Cada turma terá duração de 2 meses, com aulas às
            segundas, quartas e sextas.
          </p>
          <p className="easing_text">
            As meninas que desejem participar poderão optar por ingressar na
            turma Matutina (das 8 horas até as 11 horas) ou na turma Vespertino
            (das 14 horas até as 17 horas).
          </p>
        </div>

        <div className="course-grid">
          <div className="course-card easing_card">
            <h2>GRATUITO COM CERTIFICADO</h2>
            <span>
              Todas as atividades serão disponibilizadas de forma gratuita e com
              recebimento de certificado ao final do curso.
            </span>
            <div className="course-card-image">
              <img src="./image/stars.svg" alt="Ícone de estrela" />
            </div>
          </div>
          <div className="course-card easing_card">
            <h2>ESTRUTURA PREPARADA</h2>
            <span>
              As atividades teóricas e práticas serão realizadas nas salas e
              laboratórios do Instituto Federal do Maranhão, Campus Imperatriz.
            </span>
            <div className="course-card-image">
              <img src="./image/stars.svg" alt="Ícone de estrela" />
            </div>
          </div>
          <div className="course-card easing_card">
            <h2>APRENDENDO DO ZERO</h2>
            <span>
              Não precisa ter qualquer conhecimento prévio, você vai aprender
              tudo do zero!
            </span>
            <div className="course-card-image">
              <img src="./image/stars.svg" alt="Ícone de estrela" />
            </div>
          </div>
          <div className="course-card easing_card">
            <h2>APRENDIZADO EM GRUPO</h2>
            <span>
              As turmas serão compostas por meninas do Ensino Médio com o mesmo
              interresse: aprender mais sobre o universo tecnológico.
            </span>
            <div className="course-card-image">
              <img src="./image/stars.svg" alt="Ícone de estrela" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
