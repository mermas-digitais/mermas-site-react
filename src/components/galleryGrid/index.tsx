import './index.css';

export default function GalleryGrid() {
  return (
    <div className="container_galleryGrid">
      <div className="containerBoxSearch">
        <div className="boxSearchColor">
          <div className="textParts">
            <h1 className="blackPart">Galeria das</h1>{' '}
            <h1 className="pinkPart">Mermãs Digitais </h1>
          </div>
          <p>
            Diga Xis! E vem ver pra galeria das Mermãs Veja o que nás anda
            aprontando ;D
          </p>
        </div>
        <div className="input_box">
          <div className="box_box">
            <input
              type="text"
              placeholder="Pesquisar"
              className="seacrhInput"
            />
            <button className="buttonSearch">
              <img src="./image/MagnifyingGlass.png" alt="Ícone de foguete" />
            </button>
          </div>
        </div>
      </div>

      <div className="gallery_grid"></div>
    </div>
  );
}
