import { Navbar } from '../../components/header';
import { CardActivitys } from '../../components/cardActivitys';

import './index.css';
import { Footer } from '../../components/footer';

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

        <div>
          <section className="Container_oficinas">
            <div>
              <h2 className="title_oficinas">Oficinas</h2>
            </div>

            <div className="Container_card_groups">
              <CardActivitys />
              <CardActivitys />
              <CardActivitys />
              <CardActivitys />
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
