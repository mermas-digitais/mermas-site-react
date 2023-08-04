import { ChangeEvent, FormEvent, useState } from 'react';
import ButtonSecondQuery from '../buttons/secondQuery';
import { Camera, FileImage, X } from '@phosphor-icons/react';
import api from '../../services/api';

export const ModelPost = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;
    if (!files) return;

    const previewURL = URL.createObjectURL(files[0]);

    setPreviewImage(previewURL);
  }

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

 async function handleAddSignLeader(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const PostFormData = new FormData();

    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;

    if (fileInput && fileInput.files) {
      for(let i = 0; i < fileInput.files.length; i++) {
        PostFormData.append('images', fileInput.files[i]);
      }
    }
    
    PostFormData.append('TitlePost', String(formData.get('titlePost')));
    PostFormData.append('DescriptionPost', String(formData.get('descriptionPost')));
    PostFormData.append('createPost', String(formData.get('createPost')));
    
    // const TitlePost = String(formData.get('titlePost'));
    // const DescriptionPost = String(formData.get('descriptionPost'));
    // const createPost = String(formData.get('createPost'));

    //upload de imagem

    try {
      api.post("/createPost", PostFormData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert('Cadastrado com sucesso!');
    } catch (err) {
      console.log(err);
      alert('Erro no cadastro, tente novamente');
    }
  }

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
                onSubmit={handleAddSignLeader}
                className="flex gap-4"
                encType="multipart/form-data"
              >
                <div className="group relative flex w-64 h-72 flex-col">
                  <div className="flex h-full flex-col gap-1">
                    <label
                      htmlFor="img"
                      className="flex h-4/5 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300  bg-gray-50 text-gray-200 transition-colors  duration-200 group-hover:border-secundary"
                    >
                      {previewImage ? (
                        <picture className="w-full h-full ">
                          <img
                            alt="Assinatura" 
                            src={previewImage}
                            className="object-cover rounded-md h-full w-full"
                          />
                        </picture>
                      ) : (
                        <FileImage size={24} />
                      )}
                    </label>
                    <label
                      htmlFor="img"
                      className="flex h-1/5 cursor-pointer items-center justify-start gap-2 text-xs font-medium text-gray-400 transition-colors duration-200 group-hover:text-secundary"
                    >
                      <Camera size={18} />
                      Anexar imagem
                    </label>
                  </div>

                  <input
                    id="img"
                    name="images" multiple 
                    onChange={onFileSelected}
                    className="absolute h-0 w-0 opacity-0"
                    type="file"
                  />
                </div>


                <div className="flex flex-col gap-4 items-start">
                  <input name="titlePost" type="text" placeholder="Titulo" />
                  <textarea name="descriptionPost" placeholder="Descrição" />
                  <input name="createPost" type="date" placeholder="Data" />
                  <ButtonSecondQuery type='submit' name="Cadastrar" />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
