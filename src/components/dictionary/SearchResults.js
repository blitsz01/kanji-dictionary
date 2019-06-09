import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/SearchResults.css";
class SearchResults extends Component {
  render() {
    const wordsList = this.props.results.length ? (
      this.props.results.map(res => (
        <div className="cardStyle row" key={res.slug}>
          <div className="wrapper">
            <div className="reading">{res.japanese[0].reading}</div>
            <div className="box header ">
              <p className="labelStyle">
                {res.japanese[0].word
                  ? res.japanese[0].word
                  : res.japanese[0].reading}
              </p>
            </div>
            <div className="sidebar">
              {res.is_common ? <span className="common">common</span> : null}
              <br />
              <br />
              {res.jlpt[res.jlpt.length - 1] ? (
                <span className="jlpt">{res.jlpt[res.jlpt.length - 1]}</span>
              ) : null}
              <br />
              <br />
              {res.tags[0] ? <span className="tags">{res.tags[0]}</span> : null}
            </div>
            <div className="box content">
              <h5>
                {res.senses[0].parts_of_speech.map(typ => (
                  <span key={typ}>{typ} </span>
                ))}
              </h5>
              <ul>
                {res.senses[0].english_definitions.map(def => (
                  <li key={def}>{def}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div />
    );
    return <div>{wordsList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    results: state.wordsResults.itemResults
  };
};
export default connect(mapStateToProps)(SearchResults);
