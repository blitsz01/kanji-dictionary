import { FETCH_WORDS_RESULTS } from "./types";

export const fetchResults = keyword => dispatch => {
  fetch(
    "https://cors-anywhere.herokuapp.com/https://jisho.org/api/v1/search/words?keyword=" +
      keyword.toLowerCase()
  )
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_WORDS_RESULTS,
        payload: posts.data
      })
    );
};
