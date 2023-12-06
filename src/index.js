import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Reducers from "./Store/index.js";
import "./index.css";
const store = createStore(Reducers, compose(applyMiddleware(thunk)));
const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
