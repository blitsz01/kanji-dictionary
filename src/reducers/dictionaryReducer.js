import { FETCH_WORDS_RESULTS } from "../actions/types";
import { FETCH_KANJI_RESULTS } from "../actions/types";
const initialState = {
  itemResults: [],
  kanjiResults: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_WORDS_RESULTS:
      return {
        ...state,
        itemResults: action.payload
      };
    case FETCH_KANJI_RESULTS:
      return {
        ...state,
        kanjiResults: action.payload
      };
    default:
      return state;
  }
}
