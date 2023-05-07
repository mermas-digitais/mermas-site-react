import React, { useCallback, useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import imgLogo from '../../../public/assets/logo.png';
interface NavbarProps {
  showGallery?: boolean;
  showGalleryEllipse?: boolean;
}
const menuItens = [
  {
    name: 'Página Inicial',
    path: '/',
    to: '/',
  },
  {
    name: 'Programa',
    path: '/programa',
    to: '/programa',
  },
  {
    name: 'Equipe',
    path: '/equipe',
    to: '/equipe',
  },
  {
    name: 'Galeria',
    path: '/galeria',
    to: '/galeria',
  },
  {
    name: 'Sobre',
    path: '/sobre',
    to: '/sobre',
  },
];
export const Navbar = ({ }: NavbarProps) => {
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
  }, [show]);

  const { pathname } = useLocation();

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full py-3 transition-all justify-center flex duration-500 ease-out z-50"
        ref={headerRef}
      >
        <nav
          className="flex container justify-between items-center bg-transparent"
          ref={navRef}
        >
          <div className="flex flex-row gap-3 justify-center items-center">
            <img
              src={imgLogo}
              alt="logo side"
              className="object-contain w-[3rem] h-auto"
            />
            <Link
              className="font-paytone font-normal text-purple-900 text-base h-fit pr-8
              max-md:text-[0.875rem]"
              to="/"
            >
              Mermãs Digitais
            </Link>
          </div>

          <div className="max-md:invisible max-md:opacity-0 max-md:transition-all max-md:duration-500 ease-linear">
            <ul className="flex flex-row gap-12  ">
              {menuItens.map((item) => {
                return (
                  <li className="max-md:hidden">
                    <Link
                      className={`py-2 cursor-pointer font-quicksand text-xs  
                        ${
                          pathname === item.path
                            ? 'text-gray-400 font-semibold transition-all duration-300 ease-in-out'
                            : ' text-gray-300 font-medium transition-all duration-300 ease-in-out hover:text-gray-400'
                        }`}
                      to={item.to}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {!show ? (
            <div
              className="hidden cursor-pointer max-md:inline-block max-md:text-purple-900 max-md:text-[1.875rem] icon-menu"
              onClick={() => showMenu()}
            >
              <AiOutlineMenu
                size={40}
                style={{
                  color: '#A688FF',
                  cursor: 'pointer',
                }}
              />
            </div>
          ) : (
            <div
              className="hidden cursor-pointer max-md:inline-block icon-menu"
              onClick={() => showMenu()}
            >
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
