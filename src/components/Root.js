import React, { PropTypes, cloneElement } from "react";
import WebGLCanvas from './WebGLCanvas';

import {
  rootMain,
  center,
  gameField,
  left,
  right,
  cardSpace
} from "./styles.css";

export default class Root extends React.Component {
  render() {
    return (
      <main className={rootMain}>
        <section className={left} />
        <section className={center}>
          <WebGLCanvas width={640} height={480}>
          </WebGLCanvas>
        </section>
        <section className={right} />
      </main>
    );
  }
}
