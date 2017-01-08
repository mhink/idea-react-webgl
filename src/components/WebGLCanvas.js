import React, { PropTypes, cloneElement } from "react";
import { map } from 'lodash';
import { glCanvas } from './styles';
import WebGLShader from './WebGLShader';

export default class WebGLCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gl: null
    };
  }

  static childContextTypes = {
    gl: PropTypes.object,
  };

  getChildContext() {
    return {
      gl: this.state.gl,
    };
  }

  componentDidMount() {
    this.setState({
      gl: this._canvas.getContext('webgl')
    });
  }

  componentDidUpdate(prevProps) {
    const { gl: currGl, width: currWidth, height: currHeight } = this.props;
    const { gl: prevGl, width: prevWidth, height: prevHeight } = prevProps;
    if (
      currGl !== prevGl
    || currWidth !== prevWidth
    || currHeight !== prevHeight
    ) {
      currGl.viewport(0, 0, currWidth, currHeight);
    }
  }

  render () {
    const { children, width, height } = this.props;
    return (
      <canvas
        className={glCanvas}
        ref={c => { this._canvas = c; }}
        width={width}
        height={height}>
        { children }
      </canvas>
    );
  }
}


