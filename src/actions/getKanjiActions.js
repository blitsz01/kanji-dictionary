import { FETCH_KANJI_RESULTS } from "./types";

export const fetchKanjiResults = (value, index, array) => dispatch => {
  fetch(
    "https://cors-anywhere.herokuapp.com/https://tangorin.com/api/dict/search?dict=kanji&query=" +
      value
  )
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_KANJI_RESULTS,
        payload: posts[0].rows
      })
    );
};
