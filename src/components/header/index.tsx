import React, { useCallback, useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import './index.css';
interface NavbarProps {
  showGallery: boolean;
  showGalleryEllipse: boolean;
}
export const Navbar = ({
  showGallery = false,
  showGalleryEllipse = false,
}: NavbarProps) => {
  const [show, setShow] = React.useState(false);
  const navRef = useRef(null);
  const headerRef = useRef(null);

  const showMenu = () => {
    setShow(!show);
  };
  const showNav = () => {
    show
      ? navRef?.current?.classList.add('show')
      : navRef?.current?.classList.remove('show');
  };

  const changeColorHeader = useCallback(() => {
    const header = headerRef?.current;
    if (window.scrollY >= 1) {
      header?.classList.add('scroll');
    } else {
      header?.classList.remove('scroll');
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', changeColorHeader);
    return () => {
      window.removeEventListener('scroll', changeColorHeader);
    };
  }, [changeColorHeader]);

  React.useEffect(() => {
    showNav();
  }, [show]);

  return (
    <>
      {showGallery && (
        <>
          <div className="elipse1" />
          <div className="elipse2" />
        </>
      )}
      {showGalleryEllipse && <div className="elipse3" />}
      <header className="header" ref={headerRef}>
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

          {!show ? (
            <div className="toggle icon-menu" onClick={() => showMenu()}>
              <AiOutlineMenu
                size={40}
                style={{
                  color: '#A688FF',
                  cursor: 'pointer',
                }}
              />
            </div>
          ) : (
            <div className="toggle icon-close" onClick={() => showMenu()}>
              <AiOutlineClose
                size={40}
                style={{
                  color: '#A688FF',
                  cursor: 'pointer',
                }}
              />
            </div>
          )}
        </nav>
      </header>
    </>
  );
};
