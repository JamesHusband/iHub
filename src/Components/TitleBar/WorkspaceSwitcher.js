import React, { Component } from "react";

const workspaces = [
  {
    id: 1,
    title: "Workspace 1"
  },
  {
    id: 2,
    title: "Workspace 2"
  },
  {
    id: 3,
    title: "Workspace 3"
  }
];
class WorkspaceSwitcher extends Component {
  state = {
    workspaces: workspaces,
    currentSpace: 0
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

    console.log(space);

    this.setState({
      currentSpace: space
    });
  };

  render() {
    return (
      <div className="workspaceSwitcher">
        <button onClick={this.handlePrevWorkspace} className="workspacePrev">
          <i className="fa fa-caret-left" aria-hidden="true"></i>
        </button>
        <input
          type="text"
          value={this.state.workspaces[this.state.currentSpace].title}
          disabled
        />
        <button onClick={this.handleNextWorkspace} className="workspaceNext">
          <i className="fa fa-caret-right" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default WorkspaceSwitcher;
