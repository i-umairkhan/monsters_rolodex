import "./App.css";
import { Component } from "react";
import CardList from "./Components/Card-List/Card-List.component";
import SearchBox from "./Components/Search-Box/Search-Box.component";

// APP class component
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [], // holds all monster
      search: "", // input search feild state variable
    };
  }
  // this will run one time when component will be mounted
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") // fetching data
      .then((reponse) => reponse.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users }; // assignig fetched data to state variable
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    // on every change in search value search state var will change
    this.setState({ search: event.target.value.toLocaleLowerCase() });
  };

  // to render our component
  render() {
    const { monsters, search } = this.state;
    const { onSearchChange } = this;
    // assiging names to newMonsters based on search feild
    const newMonsters = monsters.filter((e) => {
      return e.name.toLocaleLowerCase().includes(search);
    });
    return (
      <div className="App">
        {/* Tilte */}
        <h1 className="app-title">Monsters Rolodoex</h1>
        {/* Search Box Component  */}
        <SearchBox
          className="search-box"
          placeholder="search monsters"
          onChangeHandler={onSearchChange}
        />
        {/* Card List Component */}
        <CardList monsters={newMonsters} />
      </div>
    );
  }
}

export default App;
