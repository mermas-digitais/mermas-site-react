import React from 'react';
import './index.css';
export const Home = () => {
  return (
    <>
      <section id="home" className="container delay">
        <div className="home-container">
          <div className="home-image delay_500">
            <img src="./image/girls.png" alt="Desenho de 4 meninas" />
          </div>
          <div className="home-text">
            <div className="container_text">
              <h1 className="delay_500">
                <span>Ei Mermã!</span>
                <br />
                Vem conhecer as <br /> Mermãs Digitais
              </h1>
              <p className="easing_text">
                Um projeto de extensão que incentiva a atuação de mais meninas
                nas Ciências Exatas, Engenharias e Computação, para ampliar a
                participação e liderança feminina.
              </p>
              <div className="home-info-event easing">
                <span>Edição 2022.2</span>
                <span>
                  1 de Agosto de 2022 a <br />
                  31 de Março de 2023
                </span>
              </div>
            </div>
            <div className="home-shape3"></div>
            <div className="home-shape4"></div>
          </div>
        </div>
      </section>
    </>
  );
};
