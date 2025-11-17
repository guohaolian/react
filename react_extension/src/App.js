import React, { Component } from "react";
import Demo from "./components/8_ErrorBoundary/Parent";

export default class App extends Component {
  render() {
    //const { onUnmount } = this.props;
    return (
      <div>
        {/* <Demo onUnmount={onUnmount} /> */}
        <Demo />
      </div>
    );
  }
}
