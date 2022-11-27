import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsShare } from 'react-icons/bs';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Footer } from '../footer';
import { Navbar } from '../header';
import './styles.css';
export default function GalerryId() {
  return (
    <>
      <div className="containerAllGallery">
        <Navbar showGallery={false} showGalleryEllipse={true} />

        <div className="containerRowGalleryId">
          <div className="containerColumnContentL">
            <div className="dateGallery">
              <AiOutlineCalendar />
              <p>12/12/2021</p>
            </div>
            <h1 className="titleGallery">
              Titulo da Galeria Titulo da Galeria Titulo da Galeria
            </h1>
            <div className="line" />

            <p className="textDescriptionGalery">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              condimentum, nisl ut ultricies lacinia, nisl nisl aliquam nisl,
              nec lacinia nisl nisl sit amet nisl. Sed euismod, nisl ut
              ultricies lacinia, nisl nisl aliquam nisl, nec lacinia nisl nisl
              sit amet nisl. Sed euismod, nisl ut ultricies lacinia, nisl nisl
              aliquam nisl, nec lacinia nisl nisl sit amet nisl. Sed euismod,
              nisl ut ultricies lacinia, nisl nisl aliquam nisl, nec lacinia
              nisl nisl sit amet nisl. Sed euismod, nisl ut ultricies lacinia,
              nisl nisl aliquam nisl, nec lacinia nisl nisl sit amet nisl. Sed
              euismod, nisl ut ultricies lacinia, nisl nisl aliquam nisl, nec
              lacinia nisl nisl sit amet nisl. Sed euismod, nisl ut ultricies
              lacinia, nisl nisl aliquam nisl, nec lacinia nisl nisl sit amet
              nisl. Sed euismod, nisl ut ultricies
              <br />
              <br />
              lacinia, nisl nisl aliquam nisl, nec lacinia nisl nisl sit amet
              nisl. Sed euismod, nisl ut ultricies lacinia, nisl nisl aliquam
              nisl, nec lacinia nisl nisl sit amet nisl. Sed euismod, nisl ut
              ultricies
            </p>

            <div
              className="containerButtonGallery"
              onClick={() => console.log('oi')}
            >
              <div className="backgroundButtonGallery">
                <GrFormPrevious size={25} />
              </div>
              <p className="textButtonGallery">Voltar</p>
            </div>
          </div>
          <div className="containerColumnContentR">
            <div className="buttonShareGallery">
              <BsShare size={15} />
            </div>
            <div className="containerImageGallery">
              <img
                src="https://i0.wp.com/blog.portaleducacao.com.br/wp-content/uploads/2022/03/Estrategias-Genericas.jpg"
                alt="Imagem da Galeria"
              />
            </div>
            <div className="boxRowButtons">
              <div className="buttonBorder">
                <GrFormPrevious size={35} />
              </div>
              <div className="buttonBorder">
                <GrFormNext size={35} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
