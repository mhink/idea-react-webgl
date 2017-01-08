import React, { PropTypes } from 'react';

export default class ClearViewport extends React.Component {
  static contextTypes = {
    gl: PropTypes.object,
    viewportWidth: PropTypes.number,
    viewportHeight: PropTypes.number,
  };

  render () {
    const { gl, viewportWidth, viewportHeight } = this.context;
    if (gl && viewportWidth && viewportHeight) {
      console.log("Clearing viewport...", this.context);
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.viewport(0, 0, viewportWidth, viewportHeight);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }
    return null;
  }
}
