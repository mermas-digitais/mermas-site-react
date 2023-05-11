import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Envelope, LinkedinLogo } from '@phosphor-icons/react';
import imgLogo from '../../../public/assets/logo.png';

const menu = [
  {
    name: 'Página Inicial',
    to: '/',
  },
  {
    name: 'Sobre',
    to: '/sobre',
  },
  {
    name: 'Atividades',
    to: '/activity',
  },
  {
    name: 'Equipe',
    to: '/time',
  },
  {
    name: 'Galeria',
    to: '/galeria',
  },
  {
    name: 'Artigos',
    to: '/',
  },
];

export const Footer = () => {
  return (
    <>
      <footer className="bg-purple-100 flex flex-col items-center">
        <div
          id="help"
          className="container py-12 flex flex-wrap gap-8 justify-between"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img
                className="w-20"
                src={imgLogo}
                alt="Logo do projeto Mermãs Digitais: quatro meninas com características diferentes"
              />
              <h3 className="leading-8 mb-0">
                MERMÃS <br />
                DIGITAIS
              </h3>
            </div>
            <p className="text-sm">
              Projeto de extensão desenvolvido pelo Instituto <br />
              Federal do Maranhão, Campus Imperatriz
            </p>
            <address className="not-italic text-sm text-gray-400">
              Av. Newton Belo, S/N - Vila Maria, Imperatriz - MA
            </address>
          </div>
          <div>
            <h5 className="uppercase pb-4">Acesso rápido</h5>
            <ul className="flex flex-col pl-4 border-l-2 border-solid border-purple-900">
              {menu.map((item, key) => {
                return (
                  <li key={key}>
                    <Link
                      className="font-quicksand font-normal text-gray-400 text-sm"
                      to={item.to}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <div className="mb-8">
              <h5 className="uppercase pb-4">Contato</h5>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <a
                    className="flex items-center gap-x-4 font-quicksand font-normal text-gray-400 text-sm"
                    href="mailto:mermasdigitaisifma@gmail.com"
                  >
                    <Envelope size={28} color="#9854cb" />
                    mermasdigitaisifma@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div id="socials">
              <h5 className="uppercase pb-4">Social</h5>
              <ul className="flex flex-row gap-x-4">
                <li>
                  <a
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-pop"
                    href="https://www.facebook.com/mermasdigitais"
                  >
                    <FaFacebookF size={18} color="#9854cb" />
                  </a>
                </li>
                <li>
                  <a
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-pop"
                    href="https://www.instagram.com/mermas.digitais/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineInstagram size={22} color="#9854cb" />
                  </a>
                </li>
                <li>
                  <a
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-pop"
                    href="#"
                  >
                    <LinkedinLogo size={22} color="#9854cb" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-center h-auto w-full py-4 bg-purple-900 text-white font-normal text-xs font-quicksand">
          ©2023 MERMÃS DIGITAIS | Desenvolvido por Mermãs Digitais
        </div>
      </footer>
    </>
  );
};
