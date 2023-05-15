import { FormEvent, useState } from 'react';
import ButtonSecondQuery from '../buttons/secondQuery';
import { X } from '@phosphor-icons/react';
// import api from '../../services/api';

export const ModelPost = () => {
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

  // function handleAddSignLeader(event: FormEvent) {
  //   event.preventDefault();

  //   const formData = new FormData(event.target as HTMLFormElement);
    
  //   const imageFormData = new FormData();

  //   const fileInput = document.querySelector(
  //     'input[type="file"]'
  //   ) as HTMLInputElement;
  //   if (fileInput && fileInput.files) {
  //     const file = fileInput.files[0];
  //     imageFormData.append("imagem", file);
  //   }
  //   const TitlePost = String(formData.get('titlePost'));
  //   const DescriptionPost = String(formData.get('descriptionPost'));
  //   // const createPost = String(formData.get('createPost'));
  
  //   try {
  //     api.post("/createPost", {
  //       PicturePost: imageFormData,
  //       TitlePost: TitlePost,
  //       DescriptionPost: DescriptionPost,
  //       // createPost: createPost,
        
  //     },{
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     alert('Cadastrado com sucesso!');
  //   } catch (err) {
  //     console.log(err);
  //     alert('Erro no cadastro, tente novamente');
  //   }
  // }

  return (
    <>
      <div className="w-fit">
        <ButtonSecondQuery name="Nova postagem" onClick={toggleModal} />
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
                Nova postagem
              </h5>
              <button
                className="bg-white hover:bg-gray-50 text-gray-300 text-lg p-2 w-fit h-fit rounded-full"
                onClick={toggleModal}
              >
                <X />
              </button>
            </div>

            <div>
              <form
                // onSubmit={handleAddSignLeader}
                className="flex gap-4"
                encType="multipart/form-data"
              >
                <div className="flex flex-col gap-4 w-64 items-center">
                  <div className="">
                    <img
                      src="../../../public/assets/person1.png"
                      className="object-cover rounded-md w-64 h-72"
                      alt=""
                    />
                  </div>
                  <input
                  name='imagem'
                    type="file"
                    className="bg-white p-0 rounded-none
                  block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-pink-100 file:text-pink-500
                  hover:file:bg-pink-200
                  file:cursor-pointer
                  focus:border-none
                  "
                  />
                </div>

                <div className="flex flex-col gap-4 items-start">
                  <input name='titulo' type="text" placeholder="Title" />
                  <textarea name="descriptionPost" placeholder="Description" />
                  <input name="createPost" type="date" placeholder="Date" />
                  <ButtonSecondQuery name="Cadastrar" />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
