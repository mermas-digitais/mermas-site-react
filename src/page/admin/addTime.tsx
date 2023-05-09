import { PencilSimple, TrashSimple } from '@phosphor-icons/react';
import { ModelTeam } from '../../components/modal/modalTeam';

export const AddTime = () => {
  return (
    <section className="relative w-full h-full ">
      <div className='flex flex-col gap-8 p-16'>
        <div className="flex h-fit w-full gap-8">
          <input
            type="search"
            className="bg-white"
            name=""
            placeholder="Pesquisar membro"
            id=""
          />
          <ModelTeam />
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
      </div>
    </section>
  );
};
