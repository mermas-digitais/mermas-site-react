import { CardPatronize } from '../cardPatronize';
import './index.css';

export const Patronize = () => {
  return (
    <section id="patronize" className="container delay">
      <ul>
        <CardPatronize
          image="image/ifma.png"
          alt="Logo do Instituto Federal do Maranhão, Campus Imperatriz"
        />

        <CardPatronize
          image="image/mermasdigitais.png"
          alt="Logo do Programa Meninas Digitais"
        />

        <CardPatronize
          image="image/sbc.png"
          alt="Logo da Sociedade Brasileira de Computação"
        />
      </ul>
    </section>
  );
};
