import {
  ARTICLE_DETAIL_QUERY,
  ARTICLES_QUERY,
  NEW_ARTICLE_QUERY,
  DELETE_ARTICLE_QUERY,
  UPDATE_ARTICLE_QUERY
} from "../queries";
import {
  CHANGE_ARTICLE,
  LOAD_ARTICLES,
  NEW_ARTICLE,
  DELETE_ARTICLE,
  UPDATE_ARTICLE
} from "./types";
import request from "../request";

export const changeArticle = id => {
  let article = async () => await request(ARTICLE_DETAIL_QUERY(id));
  return { type: CHANGE_ARTICLE, payload: article() };
};

export const loadArticles = () => {
  let articles = async () => await request(ARTICLES_QUERY);
  return { type: LOAD_ARTICLES, payload: articles() };
};

export const newArticle = (title, author, content, tags) => {
  let article = async () =>
    await request(NEW_ARTICLE_QUERY,{title, author, content, tags});
  return { type: NEW_ARTICLE, payload: article() };
};

export const deleteArticle = id => {
  let article = async () => await request(DELETE_ARTICLE_QUERY(id));
  return { type: DELETE_ARTICLE, payload: article() };
};

export const updateArticle = (id, title, author, content, tags) => {
  let article = async () =>
    await request(UPDATE_ARTICLE_QUERY,{id,title,author,content,tags});
  return { type: UPDATE_ARTICLE, payload: article() };
};
