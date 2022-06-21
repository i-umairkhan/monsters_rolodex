import "./Card.styles.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.image} alt="monster" />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
};

export default Card;
