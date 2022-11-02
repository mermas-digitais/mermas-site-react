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
        </div>
      </div>

      <div className="gallery_grid"></div>
    </div>
  );
}
