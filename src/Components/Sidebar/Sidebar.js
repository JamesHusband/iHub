import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import SidebarTools from "./SidebarTools";

class Sidebar extends Component {
  state = { items: this.props.apps };

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
          <li>
            <ul className="folderGroup">
              <li>
                <i className="fa fa-folder" aria-hidden="true"></i>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="appGroup">
          {this.props.workspace.apps.map((item, key) => (
            <Link
              onClick={() =>
                this.props.updateCurrentApp(this.state.items[item].id)
              }
              to="/app"
              key={key}
            >
              <li className="btn">
                <i
                  className={this.state.items[item].icon}
                  aria-hidden="true"
                ></i>
              </li>
            </Link>
          ))}
          {/* {this.state.items.map((item, key) => (
            <Link to={item.link} key={key}>
              <li className="btn">
                <i className={item.icon} aria-hidden="true"></i>
              </li>
            </Link>
          ))} */}

          <SidebarTools />
        </ul>
      </div>
    );
  }
}

export default Sidebar;
