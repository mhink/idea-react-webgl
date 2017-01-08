import React, { PropTypes, cloneElement } from "react";
import WebGLCanvas from './WebGLCanvas';
import WebGLProgram from './WebGLProgram';
import { VertexShader, FragmentShader } from './WebGLShader';

import vertexSource from 'shaders/simple.vs';
import fragmentSource from 'shaders/simple.fs';

import {
  rootMain,
  center,
  gameField,
  left,
  right,
  cardSpace
} from "./styles.css";

const Root = ({ children }) => (
  <main className={rootMain}>
    <section className={center}>
      { children }
    </section>
  </main>
);

export default Root;
