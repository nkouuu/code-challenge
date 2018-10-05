import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import articleListReducer from "./articleListReducer";

export default combineReducers({
  activeArticle: articleReducer,
  articles: articleListReducer
});
