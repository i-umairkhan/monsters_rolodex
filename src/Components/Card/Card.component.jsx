import { Component } from "react";
import "./Card.styles.css";

class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <img src={this.props.image} alt="monster" />
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default Card;
