import React, { Component } from "react";
import "./Page.scss";
class Page extends Component {
  state = {};
  render() {
    return (
      <div className="Page">
        <div className="page-inner">{this.props.content}</div>
      </div>
    );
  }
}

export default Page;
