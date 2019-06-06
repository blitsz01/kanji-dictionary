import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./MainPage.css";

import DictionaryPage from "../dictionary/DictionaryPage";
import KanjiPage from "../kanji/KanjiPage";
import GamePage from "../games/GamePage";
import AboutPage from "../about/AboutPage";

class MainPage extends Component {
  render() {
    return (
      <div>
        <hr />
        <main>
          <Switch>
            <Route exact path="/" component={DictionaryPage} />
            <Route exact path="/kanji" component={KanjiPage} />
            <Route exact path="/games" component={GamePage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default MainPage;
