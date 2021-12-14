import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { store } from "./store";
import App from "./App";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
