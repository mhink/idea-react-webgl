import React, { PropTypes, cloneElement } from "react";

export default class WebGLShader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      handle: null,
      compiled: false,
    };
  }

  static propTypes = {
    type: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  };

  static contextTypes = {
    gl: PropTypes.object,
    programHandle: PropTypes.object
  };

  componentDidUpdate(prevProps, prevState) {
    const { gl, programHandle } = this.context;
    const { type, source, onCompile } = this.props;
    const { compiled } = this.state;

    if (gl && programHandle && !compiled) {
      const handle = gl.createShader(gl[type]);
      gl.shaderSource(handle, source);
      gl.compileShader(handle);
      if (!gl.getShaderParameter(handle, gl.COMPILE_STATUS)) {
        gl.deleteShader(handle);
        throw new Error("Could not compile shader!");
      }
      this.setState({
        handle,
        compiled: true,
      }, () => {
        onCompile(handle);
      });
    }
  }

  render() {
    return null;
  }
}
