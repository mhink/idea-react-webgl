import React, { PropTypes } from 'react';

export default class WebGLBuffer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: null,
      bound: false,
    }
  }
  static contextTypes = {
    gl: PropTypes.object
  }

  componentDidUpdate(prevProps, prevState) {
    const { gl } = this.context;
    const { handle, bound } = this.state;
    const { data } = this.props;
    if (gl && !handle) {
      this.setState({
        handle: gl.createBuffer()
      });
      return;
    }
    if (gl && handle && data && !bound) {
      gl.bindBuffer(gl.ARRAY_BUFFER, handle);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      this.setState({
        bound: true
      });
      return;
    }
  }

  render() {
    const { children } = this.props;
    const { gl } = this.context;
    const { handle, bound } = this.state;
    if (gl && handle && bound) {
      gl.bindBuffer(gl.ARRAY_BUFFER, handle);
      return <div>{ children }</div>;
    }

    return null;
  }
}
