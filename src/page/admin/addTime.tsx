import { PencilSimple, TrashSimple } from '@phosphor-icons/react';
import ButtonSecondQuery from '../../components/buttons/secondQuery';

export const AddTime = () => {
  return (
    <section className="relative w-full h-full p-16 flex flex-col gap-8">
      <div className='flex h-fit w-full gap-8'>
        <input type="search" className='' name="" placeholder="Pesquisar membro" id="" />
        <div className="w-fit">
          <ButtonSecondQuery name="Novo Membro" />
        </div>
      </div>

      <div className='items-center flex justify-center w-full h-full'>
        <form action="" className="flex flex-col gap-4 card">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Cargo" />
          <input type="file" placeholder="Image" />
          <input type="date" placeholder="Date" />
          <input type="email" placeholder="Email" />
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th>Perfil</th>
            <th>Nome</th>
            <th>Matricula</th>
            <th>Cargo</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-0">
              <img
                className="w-8 h-8 rounded-full object-cover bg-black"
                src="../../../public/assets/person1.png"
                alt=""
              />
            </td>
            <td>Lailla Galeno da Silva</td>
            <td>2021BCC0041</td>
            <td>Desenvolvedora Web</td>
            <td>laillagalenoitz@gmail.com</td>
            <td>
              <ul className="flex gap-2 text-base text-gray-300">
                <li className="cursor-pointer hover:text-purple-700">
                  <TrashSimple />
                </li>
                <li className="cursor-pointer hover:text-purple-700">
                  <PencilSimple />
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td className="py-0">
              <img
                className="w-8 h-8 rounded-full object-cover bg-black"
                src="../../../public/assets/person1.png"
                alt=""
              />
            </td>
            <td>Lailla Galeno da Silva</td>
            <td>2021BCC0041</td>
            <td>Desenvolvedora Web</td>
            <td>laillagalenoitz@gmail.com</td>
            <td>
              <ul className="flex gap-2 text-base text-gray-300">
                <li className="cursor-pointer hover:text-purple-700">
                  <TrashSimple />
                </li>
                <li className="cursor-pointer hover:text-purple-700">
                  <PencilSimple />
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td className="py-0">
              <img
                className="w-8 h-8 rounded-full object-cover bg-black"
                src="../../../public/assets/person1.png"
                alt=""
              />
            </td>
            <td>Lailla Galeno da Silva</td>
            <td>2021BCC0041</td>
            <td>Desenvolvedora Web</td>
            <td>laillagalenoitz@gmail.com</td>
            <td>
              <ul className="flex gap-2 text-base text-gray-300">
                <li className="cursor-pointer hover:text-purple-700">
                  <TrashSimple />
                </li>
                <li className="cursor-pointer hover:text-purple-700">
                  <PencilSimple />
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
