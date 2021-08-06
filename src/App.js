import { CardList } from "./components/card-list/card-list.component";
import { SearchBar } from "./components/search-bar/search-bar.component";

import "./App.css";
import React, { Component } from "react";

class App extends Component {
  //set state
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  //life cycle method
  // invoked immediately after a component is mounted
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data }));
  }

  //

  searchHandler = (e) => {
    return this.setState({ searchField: e.target.value });
  };

  render() {
    const filteredList = this.state.monsters.filter((v) =>
      v.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    // console.log(filteredList);

    return (
      <div className="App">
        <h1>Cats Rolodex</h1>
        <SearchBar
          placeholder="search cats"
          handleChange={this.searchHandler}
        />
        <CardList propName={{ monsters: filteredList }} />
      </div>
    );
  }
}

export default App;
