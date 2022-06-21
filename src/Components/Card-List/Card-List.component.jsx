import "./Card-List.styles.css";
import Card from "../Card/Card.component.jsx";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return (
          <Card
            key={monster.id}
            name={monster.name}
            email={monster.email}
            image={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
          />
        );
      })}
    </div>
  );
};

export default CardList;
