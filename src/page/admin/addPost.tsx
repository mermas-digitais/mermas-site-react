import { PencilSimple, TrashSimple } from '@phosphor-icons/react';

export const AddPost = () => {
  return (
    <section>
      {/* <form action="" className="flex flex-col gap-4">
                <input type="text" placeholder="Title" />
                <textarea placeholder="Description" />
                <input type="file" placeholder="Image" />
                <input type="date" placeholder="Date" />
                <input type="text" placeholder="Tags" />
            </form> */}

      <div>
        <div className="bg-white rounded-xl w-72 h-28 flex">
          <div className="w-[50%] h-full">
            <img
              className="object-cover rounded-l-xl w-full h-full"
              src="../../../public/assets/person1.png"
              alt=""
            />
          </div>
          <div className="text-sm font-quicksand flex flex-col justify-between font-medium p-2 w-full">
            <strong>Titulo</strong>
            <p className="text-xs">
              Descrição Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum
            </p>
            <i className="text-xs text-gray-300">Date</i>
            <div>
              <ul className="flex gap-2 text-base text-gray-300">
                <li className="cursor-pointer hover:text-purple-700">
                  <TrashSimple />
                </li>
                <li className="cursor-pointer hover:text-purple-700">
                  <PencilSimple />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
