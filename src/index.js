import React from "react";
import ReactDOM from "react-dom";
import { Globalstyle } from "./style";
import App from "./App";
import { Globalstyle2 } from "./static/iconfont/iconfont.js";
ReactDOM.render(
  <React.Fragment>
    <Globalstyle />
    <Globalstyle2 />
    <App></App>
  </React.Fragment>,

  document.getElementById("root")
);
