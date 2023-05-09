import { Image, UserPlus } from '@phosphor-icons/react';
import { Link, useLocation } from 'react-router-dom';

const menu = [
  {
    icon: <Image size={24} />,
    name: 'Cadastrar Evento',
    path: '/admin',
    to: '/admin',
  },
  {
    icon: <UserPlus size={24} />,
    name: 'Cadastrar Membro',
    path: '/admin/membros',
    to: '/admin/membros',
  },
];

export const MenuAdmin = () => {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white border-r-[1px] border-gray-50 shadow-lg h-[100vh] w-80 p-8 flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex gap-4 items-center justify-start py-4 border-b-[1px] border-gray-100">
          <div>
            <img
              className="object-cover bg-black rounded-full w-12 h-12"
              src="./assets/person1.png"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <p className="font-poppins flex-1 text-gray-400 font-semibold text-sm">
              Nome da conta
            </p>
            <i className="text-xs">email@gmail.com</i>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          {menu.map((item) => {
            return (
              <li>
                <Link
                  to={item.to}
                  className={`text-gray-300 p-4 flex gap-4 rounded-lg 
                hover:bg-purple-500 hover:text-white hover:shadow-pop cursor-pointer
                text-xs items-center font-medium font-poppins transition-all duration-300
                ${
                  pathname === item.path
                    ? 'bg-purple-500 text-white shadow-pop'
                    : ''
                }
                `}
                >
                  <i>{item.icon}</i>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full">
        <Link to="/" className="bg-yellow py-4 px-6 rounded-xl w-full">
          <button>Acessar Site</button>
        </Link>
      </div>

      <div className="border-t-[1px] border-gray-100">
        <Link to="/login" className="font-poppins text-gray-400 cursor-pointer hover:text-purple-900 text-sm ">
          Sair
        </Link>
      </div>
    </nav>
  );
};
