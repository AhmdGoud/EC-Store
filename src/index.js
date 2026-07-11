import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import store from "./store/store";
import { ToastProvider } from "./components/shared/Toast";

import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Provider store={store}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </Provider>
  </HashRouter>,
);
