import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";

import MainPage from "./components/main/MainPage";
import Nav from "./components/main/Nav";
import MenuButton from "./components/main/MenuButton";

import store from "./store";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }
  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MenuButton handleMouseDown={this.handleMouseDown} />
          <Nav
            handleMouseDown={this.handleMouseDown}
            menuVisibility={this.state.visible}
          />
          <MainPage />
        </div>
      </Provider>
    );
  }
}

export default App;
