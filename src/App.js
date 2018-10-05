import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ArticleDetail from "./ArticleDetail/ArticleDetail";
import ArticleList from "./ArticleList/ArticleList";
import NewOrUpdateArticle from "./newOrUpdateArticle/NewOrUpdateArticle";
import Footer from './footer/Footer'
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showForm: false };
    this.showForm = this.showForm.bind(this);
  }

  showForm(event) {
    this.state.showForm ? this.setState({showForm:false}) : this.setState({showForm:true})

  }
  // Renders
  render() {
    return (
      <Router>
        <div className="App">
           {this.state.showForm ? <NewOrUpdateArticle unmountMe={this.showForm}/> : '' }

          <div className="navbar">
            <Link to="/">
              <h2>
                <span className="underlined">Bil</span>
                lin code challenge{" "}
              </h2>
            </Link>

            <a className='new-article-link'><span onClick={this.showForm}>New article</span></a>
          </div>
          <Switch>
            <Route path="/:id" component={ArticleDetail} />

            <Route path="/" component={ArticleList} />
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
