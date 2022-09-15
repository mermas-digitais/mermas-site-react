import './index.css';

export const Footer = () => {
  return (
    <footer className="delay">
      <div id="help" className="container delay_distance">
        <div>
          <div id="logo-footer">
            <img
              src="./image/girls.png"
              alt="Logo do projeto Mermãs Digitais: quatro meninas com características diferentes"
            />
            <h3>
              MERMÃS <br />
              DIGITAIS
            </h3>
          </div>
          <p>
            Projeto de extensão desenvolvido pelo Instituto <br />
            Federal do Maranhão, Campus Imperatriz
          </p>
          <address>Av. Newton Belo, S/N - Vila Maria, Imperatriz - MA</address>
        </div>
        <div id="quick-access">
          <h3>ACESSO RÁPIDO</h3>
          <div>
            <ul>
              <li>
                <a href="#home">Página Inicial</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#course">Projeto</a>
              </li>
              <li>
                <a href="#activity">Atividades</a>
              </li>
              <li>
                <a href="#register">Como Participar?</a>
              </li>
              <li>
                <a href="#form">Contato</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div id="contacts">
            <h3>CONTATO</h3>
            <ul>
              <li>
                <a href="mailto:mermasdigitaisifma@gmail.com">
                  <i className="ph-envelope-simple"></i>
                  mermasdigitaisifma@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:">
                  <i className="ph-whatsapp-logo"></i>(99) 99999-9999
                </a>
              </li>
            </ul>
          </div>
          <div id="socials">
            <h3>SOCIAL</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/mermasdigitais">
                  <i className="ph-facebook-logo-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mermas.digitais/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ph-instagram-logo"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ph-twitter-logo-fill"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="copyright">
        @2022 MERMÃS DIGITAIS | Desenvolvido por Mermãs Digitais
      </div>
    </footer>
  );
};
