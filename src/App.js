import React, { PropTypes } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router";

export default class App extends React.Component {
  static propTypes = {
    children : PropTypes.element.isRequired,
    store    : PropTypes.object.isRequired,
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { children, store } = this.props;
    return (
      <Provider store={store}>
        <Router>
          { children }
        </Router>
      </Provider>
    );
  }
}
