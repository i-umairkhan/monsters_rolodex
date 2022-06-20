import { Component } from "react";

class CardList extends Component {
  render() {
    // Monster array as a prop
    const { monsters } = this.props;
    return (
      <div>
        {/*  Mapping over monsters array */}
        {monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;
