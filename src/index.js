import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import Car from "./redux/containers/Car";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "./App.css";
import reducers from "./redux/reducers";
import promiseMiddleware from "redux-promise";
const createStoreWithMiddleWare = applyMiddleware(promiseMiddleware)(
  createStore
);
ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/car/:id" component={Car} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
