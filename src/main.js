import React from "react";
import ReactDOM from "react-dom";

import { configureStore } from "store";
import App from "App";
import Root from "components/Root";
import Demo from 'components/Demo';
import { Match } from 'react-router';

require("siimple");
require("normalize.css");
require("styles/core.css");

const domRoot = document.getElementById("root");
const store = configureStore(undefined, domRoot);

ReactDOM.render(
  <Root>
    <Demo />
  </Root>,
  domRoot
);
