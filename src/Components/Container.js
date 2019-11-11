import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./Container.scss";
import WebApp from "./WebApp";
class Container extends Component {
  render() {
    return (
      <div className="Container">
        <Route exact path="/">
          <h1>IHub</h1>
        </Route>
        <Route exact path="/github" component={WebApp} />
      </div>
    );
  }
}

export default Container;
