import React, { PropTypes } from 'react';

export default class ClearViewport extends React.Component {
  static contextTypes = {
    gl: PropTypes.object,
  };

  render () {
    const { gl } = this.context;
    if (gl) {
      gl.clearColor(...this.props.color);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }
    return null;
  }
}
