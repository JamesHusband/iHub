import React, { Component } from "react";
import WebView from "react-electron-web-view";
import "./WebApp.scss";
const apps = require("../data/applications.json");

class WebApp extends Component {
  state = { items: apps.apps };
  render() {
    return (
      <div className="WebApp">
        <WebView src="https://www.github.com" />
      </div>
    );
  }
}

export default WebApp;
