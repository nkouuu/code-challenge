import React, { Component } from "react";
import { connect } from "react-redux";
import { newArticle, updateArticle } from "../actions";
import "./newOrUpdateArticle.css";
import { Redirect } from "react-router-dom";
class NewOrUpdateArticle extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.triggerClick = this.triggerClick.bind(this);
    if (this.props.article) {
      this.state = Object.assign({}, this.props.article);
    } else {
      this.state = {
        goHome: false,
        title: "",
        author: "",
        content: "",
        tags: ""
      };
    }
  }

  componentDidMount() {
    this.formDiv = document.getElementsByClassName("form-div")[0];
    let modal = this.formDiv;
    let props = this.props;
    window.onclick = function(event) {
      if (event.target === modal) {
        props.unmountMe();
      }
    };
  }

  triggerClick() {
    let modal = this.formDiv.click();
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let { id, title, author, content, tags } = this.state;
    this.props.article
      ? this.props.updateArticle(id, title, author, content, tags).then(e => {
          this.triggerClick();
        })
      : this.props.newArticle(title, author, content, tags).then(a => {
          this.setState({ goHome: true });
        });
  }

  render() {
    return this.state.goHome ? (
      <Redirect to="/" />
    ) : (
      <div className="form-div new-update">
        <form onSubmit={this.handleSubmit} className="new-form">
          <label>Title</label>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder=" Title"
            required
          />

          <label>Author</label>
          <input
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
            placeholder="Author"
            required
          />

          <label>Content</label>
          <textarea
            rows="10"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
            placeholder="Once upon a time..."
            required
          />

          <label>Tags</label>
          <input
            name="tags"
            value={this.state.tags}
            onChange={this.handleChange}
            placeholder="Tags"
            required
          />

          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { newArticle, updateArticle }
)(NewOrUpdateArticle);
