import React, { PropTypes, cloneElement } from 'react';
import { map } from 'lodash';

export default class WebGLProgram extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      program: null,
      linked: false,
    };
  }

  static contextTypes = {
    gl: PropTypes.object,
  }

  static childContextTypes = {
    program: PropTypes.object,
  }

  getChildContext() {
    return { program: this.state.program };
  }

  componentDidUpdate() {
    const { ready, shaders } = this.props;
    const { program, linked } = this.state;
    const { gl } = this.context;

    if (gl && !program) {
      this.setState({
        program: gl.createProgram()
      });
      return;
    }

    if (gl && program && !linked && ready) {
      for (const shader of shaders) {
        gl.attachShader(program, shader);
      }
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error("Could not link program!");
      }
      this.setState({
        linked: true
      });
      return;
    }
  }

  componentWillUnmount() {
    const { gl } = this.context;
    const { program } = this.state;
    gl.deleteProgram(program);
    this.setState({
      program: null
    });
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}
