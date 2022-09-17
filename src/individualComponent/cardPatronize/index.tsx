import './index.css';

export const CardPatronize = ({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) => {
  return (
    <li className="listIndividual">
      <img src={image} alt={alt} />
    </li>
  );
};
