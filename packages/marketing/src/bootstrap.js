import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { __dev__ } from "./common/enviromentVariable";

export const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (__dev__) {
  const el = document.getElementById("_marketing-dev-root");

  if (el) {
    mount(el);
  }
}
