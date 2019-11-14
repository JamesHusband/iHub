import React, { Component } from "react";

import "./App.scss";
import Sidebar from "./Components/Sidebar/Sidebar";
import Container from "./Components/Container";
import TitleBar from "./Components/TitleBar/TitleBar";
import Search from "./Components/Search";

const workspaces = require("./data/workspaces.json");
const apps = require("./data/applications.json");

class App extends Component {
  state = {
    showSearch: false,
    workspaces: workspaces.workspaces,
    applications: apps.apps,
    currentSpace: 0,
    currentApp: 0
  };

  handleSearchToggle = () => {
    let toggle = this.state.showSearch;

    this.setState({
      showSearch: !toggle
    });
  };

  handlePrevWorkspace = () => {
    let space = this.state.currentSpace;
    space = space != 0 ? space - 1 : this.state.workspaces.length - 1;
    this.setState({
      currentSpace: space
    });
  };

  handleNextWorkspace = () => {
    const totalSpaces = this.state.workspaces.length - 1;
    let space = this.state.currentSpace;
    space = space != totalSpaces ? space + 1 : 0;
    this.setState({
      currentSpace: space
    });
  };

  handleUpdateCurrentApp = i => {
    const currentApp = this.state.currentApp;
    this.setState({
      currentApp: i
    });
  };

  render() {
    console.log(this.state.currentApp);

    return (
      <div className="App">
        <TitleBar
          workspaces={this.state.workspaces}
          nextWorkspace={this.handleNextWorkspace}
          prevWorkspace={this.handlePrevWorkspace}
          currentSpace={this.state.currentSpace}
          updateCurrentApp={this.handleUpdateCurrentApp}
        />
        <Sidebar
          apps={this.state.applications}
          workspace={this.state.workspaces[this.state.currentSpace]}
          showSearch={this.handleSearchToggle}
          updateCurrentApp={this.handleUpdateCurrentApp}
        />
        <Container
          currentApp={this.state.applications[this.state.currentApp]}
        />
        {this.state.showSearch ? <Search /> : null}
      </div>
    );
  }
}

export default App;
