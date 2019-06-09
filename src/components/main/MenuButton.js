import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import "./css/MenuButton.css";

class MenuButton extends Component {
  render() {
    return (
      <button id="roundButton" onMouseDown={this.props.handleMouseDown}>
        <FaBars />
      </button>
    );
  }
}

export default MenuButton;
