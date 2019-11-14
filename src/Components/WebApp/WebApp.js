import React, { Component } from "react";
import WebView from "react-electron-web-view";
import "./WebApp.scss";
class WebApp extends Component {
  render() {
    return (
      <div className="WebApp">
        <WebView src={this.props.currentApp.url} />
      </div>
    );
  }
}

export default WebApp;
