import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchResults } from "../../actions/getKanjiActions";

import "./SearchKanji.css";

class SearchKanji extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      keyWord: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const postValue = {
      keyWord: this.state.keyWord
    };

    this.props.fetchResults(postValue.keyWord);
  }
  render() {
    const postItems = this.props.results.map(res => (
      <div className="cardStyle row" key={res.slug}>
        <div className="wrapper" key={res.slug}>
          <div className="box header ">
            <span className="reading">{res.japanese[0].reading}</span>
            <p className="labelStyle">
              {res.japanese[0].word
                ? res.japanese[0].word
                : res.japanese[0].reading}
            </p>
          </div>

          <div className="sidebar">
            {" "}
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
            {" "}
            <h5>
              {" "}
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
    ));
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div id="outer">
            <h1>Search here</h1>
            <div id="searchForm">
              <input
                placeholder="Search.."
                type="text"
                name="keyWord"
                onChange={this.onChange}
                value={this.state.keyWord}
              />
              <button id="buttonSearch" type="submit">
                <FaSearch id="search" />
              </button>
            </div>
            <hr />
            {postItems}
          </div>
        </form>
      </div>
    );
  }
}

SearchKanji.propTypes = {
  fetchResults: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  results: state.posts.items
});

export default connect(
  mapStateToProps,
  { fetchResults }
)(SearchKanji);
