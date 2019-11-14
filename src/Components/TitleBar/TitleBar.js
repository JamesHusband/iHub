import React, { Component } from "react";
import "./TitleBar.scss";
import WorkspaceSwitcher from "./WorkspaceSwitcher";
import { Link } from "react-router-dom";
// const remote = require("electron").remote;

class TitleBar extends Component {
  state = {
    workspaces: this.props.workspaces,
    currentSpace: this.props.currentSpace
  };

  render() {
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

        <WorkspaceSwitcher
          workspaces={this.state.workspaces}
          nextWorkspace={this.props.nextWorkspace}
          prevWorkspace={this.props.prevWorkspace}
          currentSpace={this.props.currentSpace}
        />

        <ul className="titleBarTools">
          <Link onClick={() => this.props.updateCurrentApp(2)} to={`/app`}>
            <li>
              <i className="fa fa-ticket" aria-hidden="true"></i>
            </li>
          </Link>

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
