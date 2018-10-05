import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import promise from "redux-promise";
import { Provider } from "react-redux";
import "./style.css";

const store = createStore(reducers, {}, applyMiddleware(promise));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
