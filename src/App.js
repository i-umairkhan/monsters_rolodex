import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./Components/Card-List/Card-List.component";
import SearchBox from "./Components/Search-Box/Search-Box.component";

const App = () => {
  const [searchFeild, setSearchFeild] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [newMonsters, setNewMonsters] = useState(monsters);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // fetching data
      .then((reponse) => reponse.json())
      .then((users) => setMonsters(users));
  }, []);
  useEffect(() => {
    const filterMonsters = monsters.filter((e) => {
      return e.name.toLocaleLowerCase().includes(searchFeild);
    });
    setNewMonsters(filterMonsters);
  }, [monsters, searchFeild]);
  const onSearchChange = (event) => {
    setSearchFeild(event.target.value.toLocaleLowerCase());
  };

  return (
    <div className="App">
      {/* Tilte */}
      <h1 className="app-title">Monsters Rolodoex</h1>
      <SearchBox
        className="search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={newMonsters} />
    </div>
  );
};

export default App;
