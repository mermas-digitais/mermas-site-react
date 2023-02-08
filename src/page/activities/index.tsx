import { Navbar } from '../../components/header';
import { CardActivitys } from '../../components/cardActivitys';

import './index.css';
import { Footer } from '../../components/footer';
import { Fade } from 'react-awesome-reveal';

export default function ActivitiesPage() {
  return (
    <div className="Container">
      <div className="Container__navbar">
        <Navbar />
      </div>

      <section className="Container__Section">
        <div className="Content_title_first">
          <h2 className="title_first">
            Vem conhecer na prática o universo tecnologico
          </h2>

          <div className="Content_span">
            <span>
              Você vai estudar, praticar e se aventurar no universo STEAM com as
              Mermãs DIgitais
            </span>
          </div>
        </div>

        <div className="cards">
          <Fade triggerOnce direction="up" delay={150}>
            <section className="Container_oficinas">
              <div>
                <h2 className="title_oficinas">Oficinas</h2>
              </div>

              <div className="Container_card_groups">
                <CardActivitys
                  title="Desenvolvimento de Jogos"
                  description="Trilha de conhecimento para primeiro contato com o desenvolvimento web"
                  borderColor="#ff4a97"
                />
                <CardActivitys
                  title="Desenvolvimento de Jogos"
                  description="Trilha de conhecimento para primeiro contato com o desenvolvimento web"
                  borderColor="#ff4a97"
                />
                <CardActivitys
                  title="Desenvolvimento de Jogos"
                  description="Trilha de conhecimento para primeiro contato com o desenvolvimento web"
                  borderColor="#ff4a97"
                />
                <CardActivitys
                  title="Desenvolvimento de Jogos"
                  description="Trilha de conhecimento para primeiro contato com o desenvolvimento web"
                  borderColor="#ff4a97"
                />
              </div>
            </section>
          </Fade>
          <Fade triggerOnce direction="up" delay={150}>
            <section className="Container_oficinas">
              <div>
                <h2 className="title_oficinas">Minicursos</h2>
              </div>

              <div className="Container_card_groups">
                <CardActivitys
                  title="Introdução a Programação"
                  description="Trilha de conhecimento para primeiro contato com o desenvolvimento web"
                  borderColor="yellow"
                />
                <CardActivitys
                  title="Introdução a Programação"
                  description="Trilha de conhecimento para primeiro contato com o desenvolvimento web"
                  borderColor="yellow"
                />
                <CardActivitys
                  title="Introdução a Programação"
                  description="Trilha de conhecimento para primeiro contato com o desenvolvimento web"
                  borderColor="yellow"
                />
              </div>
            </section>
          </Fade>

          <Fade triggerOnce direction="up" delay={150}>
            <section className="Container_oficinas">
              <div>
                <h2 className="title_oficinas">Palestras</h2>
              </div>

              <div className="Container_card_groups">
                <CardActivitys
                  title="UI/UX"
                  description="Trilha de conhecimento para primeiro contato com o desenvolvimento web"
                  borderColor="#9854CB"
                />
                <CardActivitys
                  title="Hacking"
                  description="Trilha de conhecimento para primeiro contato com o desenvolvimento web"
                  borderColor="#9854CB"
                />
              </div>
            </section>
          </Fade>
        </div>
      </section>

      <Footer />
    </div>
  );
}
