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
    viewportWidth: PropTypes.number,
    viewportHeight: PropTypes.number,
  };

  getChildContext() {
    return {
      gl: this.state.gl,
      viewportWidth: this.props.width,
      viewportHeight: this.props.height,
    };
  }

  componentDidMount () {
    this.setState({
      gl: this._canvas.getContext('webgl')
    });
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


