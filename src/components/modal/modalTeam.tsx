import { useState } from 'react';
import ButtonSecondQuery from '../buttons/secondQuery';
import { X } from '@phosphor-icons/react';

export const ModelTeam = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  //impedir que o scroll da pagina continue quando o modal estiver aberto
  if (modal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <>
      <div className="w-fit">
        <ButtonSecondQuery name="Novo Membro" onClick={toggleModal} />
      </div>

      {modal && (
        <div className="w-full h-full left-0 top-0 fixed flex justify-center items-center ">
          <div
            onClick={toggleModal}
            className=" bg-[rgba(49,49,49,0.8)] w-full h-full fixed top-0 right-0"
          ></div>

          <div className="bg-white card flex flex-col gap-4 w-fit">
            <div className="flex items-center justify-between">
              <h5 className="text-base text-gray-400 font-poppins font-semibold">
                Cadastrar Membro
              </h5>
              <button
                className="bg-white hover:bg-gray-50 text-gray-300 text-lg p-2 w-fit h-fit rounded-full"
                onClick={toggleModal}
              >
                <X />
              </button>
            </div>

            <div>
              <form action="" className="flex flex-col gap-4">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Matricula" />
                <input type="text" placeholder="Cargo" />

                <input type="email" placeholder="Email" />
                <div className="flex gap-4 items-center">
                  <div>
                    <img
                      src="../../../public/assets/person1.png"
                      className="object-cover rounded-xl w-20 h-20"
                      alt=""
                    />
                  </div>
                  <input
                    type="file"
                    className="bg-white p-0 rounded-none
                    block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-pink-100 file:text-pink-500
                    hover:file:bg-pink-200
                    file:cursor-pointer
                    focus:border-none"
                    placeholder="Imagem"
                  />
                </div>
                <ButtonSecondQuery name="Cadastrar" />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
