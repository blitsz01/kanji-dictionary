import React, { Component } from "react";
import "./DictionaryPage.css";
import SearchKanji from "./SearchKanji";

class DictionaryPage extends Component {
  render() {
    return (
      <div>
        <SearchKanji />
      </div>
    );
  }
}

export default DictionaryPage;
