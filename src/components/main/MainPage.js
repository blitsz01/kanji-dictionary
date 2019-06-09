import React, { Component } from "react";
import logo from "../../logo.svg";
import { Switch, Route } from "react-router-dom";
import "./css/MainPage.css";

import DictionaryPage from "../dictionary/DictionaryPage";
import KanjiPage from "../kanji/KanjiPage";
import GamePage from "../games/GamePage";
import AboutPage from "../about/AboutPage";
import ToTopButton from "./ToTopButton";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    document.getElementById("topButton").style.display = "none";
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("topButton").style.display = "block";
    } else {
      document.getElementById("topButton").style.display = "none";
    }
  }
  render() {
    return (
      <div>
        <div className="header">
          <a href="/" className="logo">
            <img className="logoImage" src={logo} />
            React Japanese Dictionary
          </a>
        </div>
        <hr />
        <main>
          <Switch>
            <Route exact path="/" component={DictionaryPage} />
            <Route exact path="/kanji" component={KanjiPage} />
            <Route exact path="/games" component={GamePage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </main>
        <ToTopButton scrollStepInPx="50" />
      </div>
    );
  }
}

export default MainPage;
