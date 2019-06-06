import React, { Component } from "react";
import { Link } from "react-router-dom";

import backArrow from "./image/back-arrow.svg";
import translateDark from "./image/translate.svg";
import translate from "./image/translate-dark.svg";

import calligraphyDark from "./image/calligraphy.svg";
import calligraphy from "./image/calligraphy-dark.svg";

import jigsawDark from "./image/jigsaw.svg";
import jigsaw from "./image/jigsaw-dark.svg";

import aboutDark from "./image/about.svg";
import about from "./image/about-dark.svg";

import "./Nav.css";
class Nav extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }
    var pictureTranslate = {
      backgroundImage: `url(${translateDark})`,
      backgroundSize: "cover"
    };

    var pictureCalligraphy = {
      backgroundImage: `url(${calligraphyDark})`,
      backgroundSize: "cover"
    };

    var pictureJigsaw = {
      backgroundImage: `url(${jigsawDark})`,
      backgroundSize: "cover"
    };
    var pictureAbout = {
      backgroundImage: `url(${aboutDark})`,
      backgroundSize: "cover"
    };

    return (
      <div id="flyoutMenu" className={visibility}>
        <div id="navHeader">
          <img
            id="backButton"
            src={backArrow}
            alt="Close"
            onClick={this.props.handleMouseDown}
          />
        </div>
        <div id="navContent">
          <ul>
            <li>
              <Link className="nav-link" to="/">
                <div style={pictureTranslate} className="pictureContainer" />
                <h4>Dictionary</h4>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/kanji">
                <div style={pictureCalligraphy} className="pictureContainer" />
                <h4>Search Kanji</h4>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/games">
                <div style={pictureJigsaw} className="pictureContainer" />
                <h4>Games</h4>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                <div style={pictureAbout} className="pictureContainer" />
                <h4>About</h4>
              </Link>
            </li>
            <li>
              <div className="pictureContainer">
                <h4>
                  <a href="#">Settings</a>
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
