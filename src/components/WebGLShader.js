import React, { PropTypes, cloneElement } from "react";

export default class WebGLShader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shader: null,
      compiled: false,
    };
  }

  static propTypes = {
    type: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  };

  static contextTypes = {
    gl: PropTypes.object,
    program: PropTypes.object
  };

  componentDidUpdate(prevProps, prevState) {
    const { gl, program } = this.context;
    const { type, source, onCompile } = this.props;
    const { compiled } = this.state;

    if (gl && program && !compiled) {
      const shader = gl.createShader(gl[type]);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        throw new Error("Could not compile shader!");
      }
      this.setState({
        shader,
        compiled: true,
      }, () => {
        onCompile(shader);
      });
    }
  }

  render() {
    return null;
  }
}
