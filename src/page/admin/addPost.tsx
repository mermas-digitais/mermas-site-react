import { PencilSimple, TrashSimple } from '@phosphor-icons/react';
import { ModelPost } from '../../components/modal/modalPost';
import { PostType } from '../../services/types';
import { useEffect, useState } from 'react';
import api from '../../services/api';

export const AddPost = () => {

  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState<PostType[]>([]);

  useEffect(() => {
    api.get('/getPost',{
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        setPostData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(error => {
        if (error.code === 'ERR_NETWORK') {
          console.error('Erro de rede. Verifique sua conexão ou o URL da solicitação.');
        } else {
          console.error('Erro desconhecido:', error.message);
        }
      });
  }, [loading]);


  if (loading) {
    return (
      <p>Carregando...</p>
    )
  }
  //deletar post
  function handleDelete(id: string) {
    console.log(id);
    api.delete(`/deletePost/${id}`)
    .then((response) => {
      console.log('deletado com sucesso');
      setLoading(true);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <section className="relative w-full h-full flex p-8 flex-col gap-8">
      <ModelPost />
      <div className='grid grid-flow-row grid-cols-3 gap-4'>
        {postData.map((item, key) => {
          return (
            <div key={key} className="bg-white rounded-xl w-72 h-28 flex ">
              <div className="w-[50%] h-full">
                {item.PicturePost.map((item, key) => (
                  <img
                  key={key}
                  className="object-cover rounded-l-xl w-full h-full"
                  src={item.url}
                  alt=""
                />
                ))}
                
              </div>

              <div className="text-sm font-quicksand flex flex-col justify-between font-medium p-2 w-full">
                <strong>{item.TitlePost}</strong>
                <p className="text-xs">
                  {item.DescriptionPost.substring(0, 52)}...
                </p>
                <i className="text-xs text-gray-300">{item.createPost}</i>
                <div>
                  <ul className="flex gap-2 text-base text-gray-300">
                    <button type='button' onClick={() => handleDelete(item._id)} className="cursor-pointer hover:text-purple-700">
                      <TrashSimple />
                    </button>
                    <button className="cursor-pointer hover:text-purple-700">
                      <PencilSimple />
                    </button>
                  </ul>
                </div>
              </div>
            </div>
           );
        })}
      </div>
    </section>
  );
};
