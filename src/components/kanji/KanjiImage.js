import React, { Component } from "react";
class KanjiImage extends Component {
  render() {
    return (
      <div>
        <svg
          alt={this.props.strokeAlt}
          class="k-sod"
          viewBox="0 0 109 109"
          width="4em"
          height="4em"
        >
          <g class="k-sod-cross" stroke-width="1">
            <line
              x1="0"
              y1="55"
              x2="109"
              y2="55"
              stroke-dasharray="4,1"
              stroke-dashoffset="1"
            />
            <line
              x1="55"
              y1="0"
              x2="55"
              y2="109"
              stroke-dasharray="4,1"
              stroke-dashoffset="1"
            />
          </g>
          <g class="k-sod-stroke" stroke="black" stroke-width="4" fill="none">
            <path d={this.props.svgPath} />
          </g>
        </svg>
      </div>
    );
  }
}

export default KanjiImage;
