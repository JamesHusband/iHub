import React, { Component } from "react";
import "./TitleBar.scss";
import WorkspaceSwitcher from "./WorkspaceSwitcher";

const remote = require("electron").remote;

class TitleBar extends Component {
  render() {
    const window = remote.getCurrentWindow();

    return (
      <div className="titleBar">
        <ul className="windowControls">
          <li onClick={() => window.close()}>
            <i className="fa fa-circle window-close" aria-hidden="true"></i>
          </li>
          <li onClick={() => window.minimize()}>
            <i className="fa fa-circle window-minimise" aria-hidden="true"></i>
          </li>
          <li onClick={() => window.maximize()}>
            <i className="fa fa-circle window-maximise" aria-hidden="true"></i>
          </li>
        </ul>

        <WorkspaceSwitcher />

        <ul className="titleBarTools">
          <li>
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-calendar" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-hdd-o" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-th" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default TitleBar;
