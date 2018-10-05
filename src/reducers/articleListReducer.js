import { LOAD_ARTICLES, NEW_ARTICLE } from "../actions/types";

export default function articleListReducer(state = [], action) {
  switch (action.type) {
    case LOAD_ARTICLES:
      return action.payload.data.articles;
    case NEW_ARTICLE:
      return [action.payload.data.newArticle, ...state];
    default:
      return state;
  }
}
