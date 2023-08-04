import {
  CalendarBlank,
  CaretLeft,
  CaretRight,
  ShareNetwork,
} from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';
import { AiOutlineCalendar, AiOutlineClose } from 'react-icons/ai';
import { BsShare } from 'react-icons/bs';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import api from '../../services/api';
import { Routes, Route, useParams } from 'react-router-dom';
import { PostType } from '../../services/types';


export default function PostId() {
  const [showPopup, setShowPopup] = React.useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [dateAll, setDateAll] = useState<PostType>();

 
  const { id } = useParams();

  

  //api
  useEffect(() => {
    api.get(`/getPostById/${id}`,{
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        setDateAll(response.data);
        console.log(response.data);
      })
      .catch(error => {
        if (error.code === 'ERR_NETWORK') {
          console.error('Erro de rede. Verifique sua conexão ou o URL da solicitação.');
        } else {
          console.error('Erro desconhecido:', error.message);
        }
      });
  }, []);


  if (!dateAll) {
    return <p>Carregando...</p>
  }

  const nextImage = () => {
    if (currentImage === dateAll?.PicturePost.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const prevImage = () => {
    if (currentImage === 0) {
      setCurrentImage(dateAll?.PicturePost.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <>
      <section className="container flex items-center justify-center">
        <div className="flex gap-12">
          <div className="flex-1 gap-4 flex flex-col">
            <div className="flex flex-row items-center gap-2 text-gray-400">
              <CalendarBlank size={20} />
              <p className=" text-sm">{dateAll?.createPost}</p>
            </div>
            <div>
              <h3 className='mb-4'>{dateAll?.TitlePost}</h3>
              <hr className='w-72 border-purple-100'/>              
            </div>
            <p className="">
            {dateAll?.DescriptionPost} 
            </p>

            <div
              className="flex items-center justify-start gap-4 cursor-pointer"
              onClick={() => console.log('oi')}
            >
              <div className="buttonCircle">
                <CaretLeft size={24} weight="bold" />
              </div>
              <h6>Voltar</h6>
            </div>
          </div>

          <div className="flex-1 gap-4 flex flex-col items-end">
            <div className="buttonCircle p-2 cursor-pointer">
              <ShareNetwork size={18} />
            </div>
            <div className="w-full h-80">
              <img
                src={dateAll.PicturePost[currentImage].url}
                alt="Imagem da Galeria"
                className="w-full h-full object-cover  rounded-2xl"
                // onClick={() => setShowPopup(true)}
              />
            </div>
            <div className="flex gap-2 flex-end">
              <div
                className="buttonCircle p-2 cursor-pointer"
                onClick={() => prevImage()}
              >
                <CaretLeft size={18} weight="bold" />
              </div>
              <div
                className="buttonCircle p-2 cursor-pointer"
                onClick={() => nextImage()}
              >
                <CaretRight size={18} weight="bold" />
              </div>
            </div>
          </div>
        </div>

        {showPopup && (
          <>
            <div className="absolute w-screen h-screen bg-white flex items-center justify-center">
              <div className="popupClose">
                <AiOutlineClose
                  size={35}
                  color="white"
                  onClick={() => setShowPopup(false)}
                />
              </div>

              <div className="buttonPopupRight" onClick={() => nextImage()}>
                <GrFormNext size={35} />
              </div>

              <img
                src={dateAll.PicturePost[currentImage].url}
                alt="Imagem da Galeria"
                className="imagePopup"
              />
              <div className="buttonPopupLeft">
                <GrFormPrevious size={35} />
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
