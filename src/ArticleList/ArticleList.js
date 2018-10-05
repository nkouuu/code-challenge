import React, { Component } from "react";
import { connect } from "react-redux";
import { loadArticles } from "../actions";
import Article from "../Article/Article";
import "./articleList.css";

class ArticleList extends Component {
  componentDidMount() {
    this.props.loadArticles();
  }
  render() {
    return (
      <div className="articles">
        {this.props.articles.map(e => (
          <Article key={e.id} article={e} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ articles }) => {
  return { articles };
};

export default connect(
  mapStateToProps,
  { loadArticles }
)(ArticleList);
