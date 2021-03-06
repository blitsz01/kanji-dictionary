import React, { Component } from "react";
import { connect } from "react-redux";
import KanjiImage from "./KanjiImage";

import "./css/SearchDetails.css";

class SearchDetails extends Component {
  renderImage(svgInfo, svgAlt) {
    let kanjiImage = [];
    let pathKanji = "";
    for (let i = 0; i < svgInfo.length; i++) {
      pathKanji = pathKanji + svgInfo[i];
      kanjiImage.push(
        <div className="imageSvg">
          <KanjiImage svgPath={pathKanji} strokeAlt={svgAlt} />
        </div>
      );
    }
    return kanjiImage;
  }
  render() {
    const kanjiInfo = this.props.results ? (
      this.props.results.map(res => (
        <div className="row" key={res.k}>
          <div className="col-1">
            {" "}
            <div id="kMain">{res.k}</div>
          </div>
          <div className="col-2">
            {" "}
            <h4>English :</h4>
            <ul>
              {res.eng ? res.eng.map(eng => <li key={eng}>{eng}</li>) : null}
            </ul>
          </div>
          <div className="col-2">
            <h4>Kanji Rank : </h4>
            <p>Jlpt {res.jlpt}</p>
            <p>Grade {res.gr}</p>
          </div>
          <div className="row col-3">
            <h4>Onyomi :</h4>
            <div className="col-4">
              <ul>
                {res.on ? res.on.map(on => <li key={on}>{on}</li>) : null}
              </ul>
            </div>
            <div className="col-4">
              <ul>
                {res.onr ? res.onr.map(onr => <li key={onr}>{onr}</li>) : null}
              </ul>
            </div>
          </div>
          <div className="row col-3">
            {" "}
            <h4>Kunyomi : </h4>
            <div className="col-4">
              <ul>
                {res.kun ? res.kun.map(kun => <li key={kun}>{kun}</li>) : null}
              </ul>
            </div>
            <div className="col-4">
              <ul>
                {res.kunr
                  ? res.kunr.map(kunr => <li key={kunr}>{kunr}</li>)
                  : null}
              </ul>
            </div>
          </div>
          <div className="col-5">
            <h4 id="strokeLabel">Stroke Count :</h4>
            <span>{res.jk}</span>
            <div className="imageContainer">
              <p>
                {res.sod
                  ? res.sod.map(sod => (
                      <span key={sod.p}>{this.renderImage(sod.p, res.k)}</span>
                    ))
                  : null}
              </p>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div>No results!</div>
    );
    return <div>{kanjiInfo}</div>;
  }
}

const mapStateToProps = state => {
  return {
    results: state.wordsResults.kanjiResults
  };
};
export default connect(mapStateToProps)(SearchDetails);
