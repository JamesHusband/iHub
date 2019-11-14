import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import SidebarTools from "./SidebarTools";
const apps = require("../../data/applications.json");
class Sidebar extends Component {
  state = { items: apps.apps };

  render() {
    return (
      <div className="Sidebar">
        <ul className="sidebarSearch">
          <li onClick={this.props.showSearch}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </li>
          <Link to="/">
            <li className="btn">
              <i className="fa fa-home" aria-hidden="true"></i>
            </li>
          </Link>
        </ul>

        <ul className="appGroup">
          {this.state.items.map((item, key) => (
            <Link to={item.link} key={key}>
              <li className="btn">
                <i className={item.icon} aria-hidden="true"></i>
              </li>
            </Link>
          ))}

          <li>
            <ul className="folderGroup">
              <li>
                <i className="fa fa-folder" aria-hidden="true"></i>
              </li>
            </ul>
          </li>

          <SidebarTools />
        </ul>
      </div>
    );
  }
}

export default Sidebar;
