import { Component } from "react";
import "./Card-List.styles.css";
import Card from "../Card/Card.component.jsx";

class CardList extends Component {
  render() {
    // Monster array as a prop
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {/*  Mapping over monsters array */}
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
  }
}

export default CardList;
