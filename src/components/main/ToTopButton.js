import React, { Component } from "react";
import "./css/ToTopButton.css";
import { FaArrowCircleUp } from "react-icons/fa";
class ScrollButton extends Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), 0);
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <button
        title="Back to top"
        className="scroll"
        id="topButton"
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <FaArrowCircleUp className="arrow-up" />
      </button>
    );
  }
}
export default ScrollButton;
