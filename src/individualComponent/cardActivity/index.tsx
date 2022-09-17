import styles from './index.module.css';

export const CardActivity = ({
  image,
  alt,
  title,
  description,
  button,
}: {
  image: string;
  alt: string;
  title: string;
  description: string;
  button: string;
}) => {
  return (
    <div className={styles.box}>
      <div className={styles.box_head}>
        <i>
          <img src={image} alt={alt} />
        </i>
        <h4>{title}</h4>
      </div>
      <div className={styles.box_body}>
        <p>{description}</p>
      </div>
      <div className={styles.box_button}>
        <button>{button}</button>
      </div>
    </div>
  );
};
