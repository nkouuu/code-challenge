import React, {Component} from "react";
import   "./article.css";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeArticle} from '../actions'

class Article extends Component {

  
  render(){
    const article = this.props.article
  return (
    <Link to={`${article.id}`} >
    <div  className="article">
      <h4 >{article.title}</h4>
      <div className="author">{article.author}</div>
      <div className='content'>{article.excerpt}...</div>
    </div>
    </Link>
  );
  }
}

export default connect(null,{changeArticle})(Article)
