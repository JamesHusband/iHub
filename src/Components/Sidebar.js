import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
const apps = require("../data/applications.json");
class Sidebar extends Component {
  state = { items: apps.apps };

  handleRLDDChange = newItems => {
    this.setState({ items: newItems });
  };
  render() {
    return (
      <div className="sidebar">
        <ul className="appList">
          <Link to="/">
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>
            </li>
          </Link>

          {this.state.items.map((item, key) => (
            <Link to={item.link} key={key}>
              <li>
                <i className={item.icon} aria-hidden="true"></i>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
