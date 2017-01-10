import React, { PropTypes } from 'react';

export default class WebGLAttrib extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: null,
      enabled: false,
    };
  }

  static contextTypes = {
    gl: PropTypes.object,
    programHandle: PropTypes.object
  };

  componentDidUpdate() {
    const { name } = this.props;
    const { gl, programHandle } = this.context;

    if (gl && programHandle && !handle) {
      this.setState({
        handle: gl.getAttribLocation(programHandle, name);
      });
      return;
    }
    if (gl && programHandle && handle && !name) {
      gl.enableVertexAttribArray(handle);
      this.setState({
        enabled: true,
      });
      return;
    }
  }

  render () {
    const { children } = this.props;
    const { gl } = this.context;
    const { handle, enabled } = this.state;

    if (gl && handle && enabled) {
      gl.
      return <div>{ children }</div>
    }

    return null;
  }
}
