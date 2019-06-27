import React, { Component } from "react";
import "./css/SearchWords.css";
import { FaSearch } from "react-icons/fa";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchResults } from "../../actions/getWordsActions";

class SearchWords extends Component {
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
    if (postValue.keyWord) this.props.fetchResults(postValue.keyWord);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <h1>Search Word</h1>
            <div id="searchForm">
              <div className="inputContainer">
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
            </div>
            <hr />
          </div>
        </form>
      </div>
    );
  }
}

SearchWords.propTypes = {
  fetchResults: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  results: state.wordsResults.itemResults
});

export default connect(
  mapStateToProps,
  { fetchResults }
)(SearchWords);
