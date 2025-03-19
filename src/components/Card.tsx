import "../styles/Card.css";

const Card = ({
  id,
  image,
  title,
  subtitle,
}: {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className={`card-container ${`container-${id}`}`}>
      <div className="inner-content">
        <img src={image} alt={`${title} image `} />
        <div className="card-content">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      {id !== 2 && <div className="vertical-line"> </div>}
    </div>
  );
};

export default Card;
