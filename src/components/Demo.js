import React from "react";
import WebGLCanvas from './WebGLCanvas';
import WebGLProgram from './WebGLProgram';
import WebGLShader from './WebGLShader';
import WebGLBuffer from './WebGLBuffer';
import ClearViewport from './ClearViewport';
import vertexSource from 'shaders/simple.vs';
import fragmentSource from 'shaders/simple.fs';

const TRIANGLE_VERTICES = [
   0.0,  1.0,  0.0,
  -1.0, -1.0,  0.0,
   1.0, -1.0,  0.0,
];

const SQUARE_VERTICES = [
   1.0,  1.0,  0.0,
  -1.0,  1.0,  0.0,
   1.0, -1.0,  0.0,
  -1.0, -1.0,  0.0,
];

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.setVertexShader = this.setVertexShader.bind(this);
    this.setFragmentShader = this.setFragmentShader.bind(this);
    this.state = {
      vertexShader: null,
      fragmentShader: null,
      shadersReady: false,
    }
  }

  componentDidUpdate() {
    const { shadersReady, vertexShader, fragmentShader } = this.state;
    if (!!vertexShader && !!fragmentShader && !shadersReady) {
      this.setState({
        shaders: [vertexShader, fragmentShader],
        shadersReady: true,
      });
    }
  }

  setVertexShader(vertexShader) {
    this.setState({ vertexShader });
  }

  setFragmentShader(fragmentShader) {
    this.setState({ fragmentShader });
  }

  render() {
    const { shadersReady, shaders } = this.state;
    return (
      <WebGLCanvas width={640} height={480}>
        <WebGLProgram shaders={shaders} ready={shadersReady}>
          <WebGLShader type="VERTEX_SHADER" source={vertexSource} onCompile={this.setVertexShader} />
          <WebGLShader type="FRAGMENT_SHADER" source={fragmentSource} onCompile={this.setFragmentShader} />
          <WebGLBuffer ref={c => { this._triangleVertexBuffer = c; }} id="triangleVertices" data={TRIANGLE_VERTICES} />
          <WebGLBuffer ref={c => { this._squareVertexBuffer = c; }} id="squareVertices" data={SQUARE_VERTICES} />

          { shadersReady && 
            <ClearViewport color={[0.0, 0.0, 0.0, 1.0]} />
          }
        </WebGLProgram>
      </WebGLCanvas>
    );
  }
}
export default Demo;
