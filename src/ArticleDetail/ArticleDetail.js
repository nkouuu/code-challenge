import React, { Component } from "react";
import { connect } from "react-redux";
import { changeArticle, deleteArticle } from "../actions";
import NewOrUpdateArticle from "../NewOrUpdateArticle/NewOrUpdateArticle";
import "./articleDetail.css";

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.state = { showForm: false };
  }

  componentDidMount() {}

  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.changeArticle(id);
  }

  handleDelete(event) {
    this.props
      .deleteArticle(this.props.activeArticle.id)
      .then(a => this.props.history.push("/"));
  }

  handleUpdate(event) {
    this.state.showForm
      ? this.setState({ showForm: false })
      : this.setState({ showForm: true });
  }

  render() {
    const article = this.props.activeArticle;

    return (
      <div className='activeArticle-div'>
        {article ? (
          <div>
            <div>
              {this.state.showForm ? (
                <NewOrUpdateArticle
                  unmountMe={this.handleUpdate}
                  article={article}
                />
              ) : (
                ""
              )}
            </div>

            <div className="activeArticle">
              <div className="title">
                <h3>{ article.title }</h3>
                <div>
                <button onClick={this.handleUpdate}><i className="fas fa-pencil-alt"></i></button>
                  <button onClick={this.handleDelete}><i className="far fa-trash-alt"></i></button>
                </div>
              </div>
              <div className="author">by { article.author }</div>
              <p className="content">{ article.content }</p>
            </div>
          </div>
        ) : (
          <h4 className="not-found">Article not found</h4>
        )}
      </div>
    );
  }
}

function mapStateToProps({ activeArticle }) {
  return { activeArticle };
}

export default connect(
  mapStateToProps,
  { changeArticle, deleteArticle }
)(ArticleDetail);
