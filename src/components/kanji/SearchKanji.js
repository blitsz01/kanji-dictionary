import React, { Component } from "react";
import "./css/SearchKanji.css";
import { FaSearch } from "react-icons/fa";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchKanjiResults } from "../../actions/getKanjiActions";

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
    if (postValue.keyWord) this.props.fetchKanjiResults(postValue.keyWord);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <h1>Search Kanji</h1>
            <div id="searchForm">
              <input
                placeholder="Search..English, Japanese"
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
          </div>
        </form>
      </div>
    );
  }
}

SearchKanji.propTypes = {
  fetchKanjiResults: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  results: state.wordsResults.kanjiResults
});

export default connect(
  mapStateToProps,
  { fetchKanjiResults }
)(SearchKanji);
