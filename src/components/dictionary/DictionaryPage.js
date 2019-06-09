import React, { Component } from "react";
import "./css/DictionaryPage.css";
import SearchWords from "./SearchWords";
import SearchResults from "./SearchResults";

class DictionaryPage extends Component {
  render() {
    return (
      <div id="outer">
        <SearchWords />
        <SearchResults />
      </div>
    );
  }
}

export default DictionaryPage;
