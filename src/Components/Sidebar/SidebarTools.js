import React, { Component } from "react";
import { Link } from "react-router-dom";
class SidebarTools extends Component {
  state = { displayTools: false };

  handleDisplayTools = () => {
    let toggled = this.state.displayTools;

    console.log(toggled);

    this.setState({
      displayTools: !toggled
    });
  };

  render() {
    return (
      <ul className="sidebarTools">
        <li className="showMore" onClick={this.handleDisplayTools}>
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </li>

        {this.state.displayTools ? (
          <ul className="ShowMoreTools">
            <li className="btn addNewApplication">
              <i className="fa fa-plus-square" aria-hidden="true"></i>
            </li>
            <li className="btn">
              <i className="fa fa-bell" aria-hidden="true"></i>
            </li>

            <li className="btn">
              <i className="fa fa fa-th-large" aria-hidden="true"></i>
            </li>

            <Link to="/settings">
              <li className="btn">
                <i className="fa fa-cog" aria-hidden="true"></i>
              </li>
            </Link>
          </ul>
        ) : null}
      </ul>
    );
  }
}

export default SidebarTools;
