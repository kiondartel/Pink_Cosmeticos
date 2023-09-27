import React, { Component } from "react";
import "./search.css";
class SearchBar extends Component {
  render() {
    return (
      <div className="search-container">
        <input type="text" placeholder="Pesquisar produtos" />
        <button type="submit">Pesquisar</button>
      </div>
    );
  }
}

export default SearchBar;
