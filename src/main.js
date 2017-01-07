import React from "react";
import ReactDOM from "react-dom";

import { configureStore } from "store";
import App from "App";
import Root from "components/Root";
import { Match } from 'react-router';

require("siimple");
require("normalize.css");
require("styles/core.css");

const domRoot = document.getElementById("root");
const store = configureStore(undefined, domRoot);

ReactDOM.render(
  <App store={store}>
    <Root />
  </App>,
  domRoot
);
