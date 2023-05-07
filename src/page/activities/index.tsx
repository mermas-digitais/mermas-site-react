import { CardActivitys } from '../../components/cardActivitys';
import './index.css';
import { Fade } from 'react-awesome-reveal';
import ButtonPrimary from '../../components/buttons/primary';

export default function ActivitiesPage() {
  return (
    <section className="w-[100vw]">
      <div className="container padding">
        <Fade triggerOnce direction="up">
        <div className="flex flex-col items-center content-center">
          <h2>Desenvolvimento Web</h2>
          <h3>Vem conhecer na prática o universo tecnologico</h3>
          <p className="w-[30rem] text-center">
            Você vai estudar, praticar e se aventurar no universo STEAM com as
            Mermãs DIgitais
          </p>
          <ButtonPrimary to="/" name="Inscrever-se"></ButtonPrimary>
        </div>
        </Fade>

        <Fade triggerOnce direction="up" delay={150}>
          <div className="bg-slate-400 flex flex-row gap-4">
            <div>
              <h3>O que vocẽ aprenderá</h3>
              <p>Conhece as etapas</p>
            </div>

            <div className="flex flex-col gap-4">
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
          </div>
        </Fade>
      </div>
    </section>
  );
}
