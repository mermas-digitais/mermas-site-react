import React, { useCallback, useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './index.css';
interface NavbarProps {
  showGallery?: boolean;
  showGalleryEllipse?: boolean;
}
export const Navbar = ({
  showGallery = false,
  showGalleryEllipse = false,
}: NavbarProps) => {
  const [show, setShow] = React.useState(false);
  const navRef = useRef<
    HTMLDivElement & {
      style: {
        transform: string;
      };
    }
  >(null);
  const headerRef = useRef<HTMLHeadElement>(null);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  const { pathname } = useLocation();

  return (
    <>
      {showGalleryEllipse && (
        <>
          <div className="elipse1" />
          <div className="elipse2" />
        </>
      )}
      {showGalleryEllipse && <div className="elipse3" />}
      <header className="flex justify-center items-center fixed top-0 left-0 w-full px-6 py-0 z-50 bg-transparent" ref={headerRef}>
        <nav className="w-full min-w-full items-center justify-evenly delay_500" ref={navRef}>
          <div className="flex justify-center items-center w-full gap-6 m-0 max-w-xs bg-transparent">
            <img
              src="../../../public/image/logo132.png"
              alt="logo side"
              className="w-10 h-auto object-contain"
            />
            <Link to="/">Mermãs Digitais</Link>
          </div>
          <div className="menu">
            <ul className="group_button">
              <li>
                <a href="/" className={`${pathname === '/' && 'button_click'}`}>
                  Página Inicial
                </a>
              </li>

              <li>
                <Link
                  className={`${pathname === '/atividades' && 'button_click'}`}
                  to="/atividades"
                >
                  Atividades
                </Link>
              </li>

              <li>
                <Link
                  className={`${pathname === '/time' && 'button_click'}`}
                  to="/time"
                >
                  Equipe
                </Link>
              </li>

              <li>
                <Link
                  className={`${pathname === '/galeria' && 'button_click'}`}
                  to="/galeria"
                >
                  Galeria
                </Link>
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
