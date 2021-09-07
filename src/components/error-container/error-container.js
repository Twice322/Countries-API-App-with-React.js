import React, { Component } from "react";
import { ErrorItem } from "../error-item/error-item";

export default class ErrorContainer extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorItem />;
    }
    return this.props.children;
  }
}
