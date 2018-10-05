import {
  CHANGE_ARTICLE,
  NEW_ARTICLE,
  UPDATE_ARTICLE
} from "../actions/types";

export default function articleReducer(state = {}, action) {
  switch (action.type) {
    case CHANGE_ARTICLE:
      return action.payload.data.article;
    case NEW_ARTICLE:
      return action.payload.data.newArticle;
    case UPDATE_ARTICLE:
      return action.payload.data.updateArticle;
    default:
      return state;
  }
}
