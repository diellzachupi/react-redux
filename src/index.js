import React from "react";
import './index.css';
import App from "./App";
import { render } from "react-dom"; 
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./reducers/Reducer";

const store = createStore(Reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
