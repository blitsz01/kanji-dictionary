import React, { Component } from "react";
import "./css/KanjiPage.css";
import SearchKanji from "./SearchKanji";
import SearchDetails from "./SearchDetails";
class KanjiPage extends Component {
  render() {
    return (
      <div id="outerKanji">
        <SearchKanji />
        <SearchDetails />
      </div>
    );
  }
}

export default KanjiPage;
