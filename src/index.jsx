import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App/App.render";
import "./index.css";

import Handsontable from "handsontable";
console.log(`🚀 | Handsontable`, Handsontable);
import _ from "lodash";
console.log(`🚀 | _`, _);

const madge = require("madge");
console.log(`🚀 | madge`, madge);
const notevil = require("notevil");
console.log(`🚀 | notevil`, notevil);

import Ruler from "@scena/ruler";

const ruler = new Ruler(document.body, {
  type: "horizontal",
});
console.log(`🚀 | Ruler`, Ruler, ruler);
import GridLayout from "react-grid-layout";
console.log(`🚀 | GridLayout`, GridLayout);
import * as antd from "antd";
console.log(`🚀 | antd`, antd);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
