import React from 'react';
import './index.css';
export const About = () => {
  return (
    <>
      <section id="about">
        <div className="about-image">
          <img src="./image/astronauta.svg" alt="Astronauta" />
        </div>

        <div className="box">
          <div className="container-about">
            <div className="about-text distance_50">
              <h2 className="title easing_title">Éguas, ainda não conhece?</h2>
              <p className="easing_text">
                O projeto surgiu em 2019 de forma remota, com o objetivo de
                incentivar mais meninas do Ensino Médio da rede pública a
                despertarem o interesse por cursos de Computação e suas
                tecnologias na cidade de Imperatriz Maranhão.
              </p>
              <p className="easing_text">
                Atualmente é um projeto parceiro do Programa Meninas Digitais da
                Sociedade Brasileira de Computação (SBC) e está na sua segunda
                edição, ofertando palestras, mesa-redonda, minicursos e oficinas
                às meninas que desejem participar.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="about-text distance_50">
            <h2 className="title easing_title">Éguas, ainda não conhece?</h2>
            <p className="easing_text">
              O projeto surgiu em 2019 de forma remota, com o objetivo de
              incentivar mais meninas do Ensino Médio da rede pública a
              despertarem o interesse por cursos de Computação e suas
              tecnologias na cidade de Imperatriz Maranhão.
            </p>
            <p className="easing_text">
              Atualmente é um projeto parceiro do Programa Meninas Digitais da
              Sociedade Brasileira de Computação (SBC) e está na sua segunda
              edição, ofertando palestras, mesa-redonda, minicursos e oficinas
              às meninas que desejem participar.
            </p>
          </div>
        </div> */}
      </section>
    </>
  );
};
