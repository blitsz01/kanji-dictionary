import { combineReducers } from "redux";
import dictionaryReducer from "./dictionaryReducer";

export default combineReducers({
  wordsResults: dictionaryReducer
});
