import React, { PropTypes, cloneElement } from "react";
import { glCanvas } from './styles';

export default class WebGLCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gl: null,
    }
  }

  static childContextTypes = {
    gl: PropTypes.any,
  };

  getChildContext () {
    return {
      gl: this.state.gl
    };
  }

  componentDidMount () {
    this.setState({
      gl: this._canvas.getContext('webgl')
    });
  }

  render () {
    const { width, height } = this.props;
    return (
      <canvas className={glCanvas} ref={c => { this._canvas = c; }} width={width} height={height} />
    );
  }
}


