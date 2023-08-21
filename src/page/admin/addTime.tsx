import { PencilSimple, TrashSimple } from '@phosphor-icons/react';
import { ModelTeam } from '../../components/modal/modalTeam';

export const AddTime = () => {
  return (
    <section className="relative w-full h-full p-8 ">
      <div className="flex flex-col gap-8 w-full">
        <div className="flex max-md:flex-col gap-4 h-fit w-full md:gap-8">
          <input
            type="search"
            className="bg-white"
            name=""
            placeholder="Pesquisar membro"
            id=""
          />
          <ModelTeam />
        </div>

        <div className="overflow-scroll scroller h-full">
          <table >
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
      </div>
    </section>
  );
};
