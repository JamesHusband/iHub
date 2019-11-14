import React, { Component } from "react";

class WorkspaceSwitcher extends Component {
  render() {
    return (
      <div className="workspaceSwitcher">
        <button onClick={this.props.prevWorkspace} className="workspacePrev">
          <i className="fa fa-caret-left" aria-hidden="true"></i>
        </button>
        <input
          type="text"
          value={this.props.workspaces[this.props.currentSpace].title}
          disabled
        />
        <button onClick={this.props.nextWorkspace} className="workspaceNext">
          <i className="fa fa-caret-right" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default WorkspaceSwitcher;
