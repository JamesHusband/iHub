import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./Container.scss";
import WebApp from "./Webapp/WebApp";
import Page from "./Page/Page";
class Container extends Component {
  render() {
    return (
      <div className="Container">
        <Route exact path="/">
          <Page content={<h1>iHub</h1>} />
        </Route>
        <Route exact path="/settings">
          <Page content={<h1>Settings</h1>} />
        </Route>
        <Route exact path="/github" component={WebApp} />
      </div>
    );
  }
}

export default Container;
