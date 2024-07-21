import React, { useCallback, useRef } from 'react';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import imgLogo from '../../../public/assets/logo.svg';
import { List, X } from '@phosphor-icons/react';
interface NavbarProps {
  clickScroll: () => void;
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
  // {
  //   name: 'Equipe',
  //   path: '/equipe',
  //   to: '/equipe',
  // },
  // {
  //   name: 'Galeria',
  //   path: '/galeria',
  //   to: '/galeria',
  // },
  {
    name: 'Artigos',
    path: '/artigos',
    to: '/artigos',
  },
];

export const Navbar = ({ clickScroll }: NavbarProps) => {
  const [show, setShow] = React.useState(false);
  const showMenu = () => {
    setShow(!show);
  };

  const navRef = useRef<
    HTMLDivElement & {
      style: {
        transform: string;
      };
    }
  >(null);
  const headerRef = useRef<HTMLHeadElement>(null);

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
          className="flex container justify-between items-center bg-transparent bg-slate-400 relative"
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

          <div className="transition-all duration-500 ease-linear">
            <ul
              className={` flex flex-row gap-12 
            max-lg:header-menu ${
              show ? 'visible opacity-100' : 'max-lg:invisible max-lg:opacity-0'
            }`}
            >
              {menuItens.map((item, key) => {
                return (
                  <li key={key}>
                    <Link
                      onClick={clickScroll}
                      className={`py-2 cursor-pointer font-quicksand text-xs whitespace-nowrap 
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

          <button
            onClick={showMenu}
            className="lg:hidden hover:text-purple-900 p-1 text-3xl text-gray-400 h-full items-center justify-center cursor-pointer rounded-md"
          >
            {!show ? (
              <div className="transition-all duration-300 active:scale-75">
                <List weight="bold" />
              </div>
            ) : (
              <div className="transition-all duration-300 active:scale-75 ">
                <X weight="bold" />
              </div>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};
