import React, { PropTypes, cloneElement } from 'react';
import { map } from 'lodash';

export default class WebGLProgram extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: null,
      linked: false,
    };
  }

  static contextTypes = {
    gl: PropTypes.object,
  }

  static childContextTypes = {
    programHandle: PropTypes.object,
  }

  getChildContext() {
    return { programHandle: this.state.handle};
  }

  componentDidUpdate() {
    const { ready, shaders } = this.props;
    const { handle, linked } = this.state;
    const { gl } = this.context;

    if (gl && !handle) {
      this.setState({
        handle: gl.createProgram()
      });
      return;
    }

    if (gl && handle && !linked && ready) {
      for (const shader of shaders) {
        gl.attachShader(handle, shader);
      }
      gl.linkProgram(handle);
      if (!gl.getProgramParameter(handle, gl.LINK_STATUS)) {
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
    const { handle } = this.state;
    gl.deleteProgram(handle);
    this.setState({
      handle: null
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
