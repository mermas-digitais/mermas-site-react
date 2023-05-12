import { Globe, Image, List, Nut, SignOut, UserPlus, X } from '@phosphor-icons/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const menu = [
  {
    icon: <Image weight="fill" />,
    name: 'Cadastrar Evento',
    path: '/admin',
    to: '/admin',
  },
  {
    icon: <UserPlus weight="fill" />,
    name: 'Cadastrar Membro',
    path: '/admin/membros',
    to: '/admin/membros',
  },
  {
    icon: <Globe weight="fill" />,
    name: 'Acessar Site',
    path: '/',
    to: '/',
  },
  {
    icon: <SignOut weight="fill" />,
    name: 'Sair',
    path: '/login',
    to: '/login',
  },
];

export const MenuAdmin = () => {
  const { pathname } = useLocation();
  
  return (
    <nav
      className="w-full md:p-4 h-fit bg-white border-gray-50 shadow-lg
    max-md:border-t-[1px] 
    md:h-[100vh] md:w-80 md:border-r-[1px]"
    >
      <div className="md:flex flex-col justify-between">
        <div className="flex flex-col gap-8 max-md:flex-row max-md:justify-center">
          
          <div className="flex gap-4 items-center justify-start py-4 md:border-b-[1px] border-gray-100">
            <div>
              <img
                className="object-cover bg-black rounded-full w-12 h-12"
                src="./assets/person1.png"
                alt=""
              />
            </div>
            <div className="flex flex-col max-md:hidden">
              <p className="font-poppins flex-1 text-gray-400 font-semibold text-sm">
                Nome da conta
              </p>
              <i className="text-xs">email@gmail.com</i>
            </div>
          </div>
          
          <ul className="flex md:flex-col gap-2 max-md:items-center">
            {menu.map((item) => {
              return (
                <li>
                  <Link
                    to={item.to}
                    className={`text-gray-300 p-4 flex gap-4 rounded-lg 
                hover:md:bg-purple-500 hover:md:text-white hover:md:shadow-pop cursor-pointer
                text-xs items-center font-medium font-poppins transition-all duration-300
                ${
                  pathname === item.path
                    ? 'md:bg-purple-500 max-md:text-purple-500 md:text-white md:shadow-pop'
                    : ''
                }
                `}
                  >
                    <i className="text-3xl">{item.icon}</i>
                    <div className="max-md:hidden">{item.name}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
