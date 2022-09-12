import React, { useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import './index.css';
export const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const navRef = useRef(null);
  const showMenu = () => {
    setShow(!show);
  };
  const showNav = () => {
    show
      ? navRef?.current?.classList.add('show')
      : navRef?.current?.classList.remove('show');
  };

  React.useEffect(() => {
    showNav();
  }, [show]);

  return (
    <>
      <header className="header">
        <nav className="container delay_500" ref={navRef}>
          <a className="logo" href="#">
            Mermãs Digitais
          </a>
          <div className="menu">
            <ul className="group_button">
              <li>
                <a className="button_click" href="#home">
                  Página Inicial
                </a>
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
                <a href="#register">Como participar?</a>
              </li>
              <li>
                <a href="#form">Contato</a>
              </li>
            </ul>
          </div>

          {/* menu-mobile */}
          {!show ? (
            <div className="toggle icon-menu" onClick={() => showMenu()}>
              <AiOutlineMenu size={40} />
            </div>
          ) : (
            <div className="toggle icon-close" onClick={() => showMenu()}>
              <AiOutlineClose size={40} />
            </div>
          )}
        </nav>
      </header>
    </>
  );
};
