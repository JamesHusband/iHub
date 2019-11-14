import React, { Component } from "react";

import "./App.scss";
import Sidebar from "./Components/Sidebar/Sidebar";
import Container from "./Components/Container";
import TitleBar from "./Components/TitleBar/TitleBar";
import Search from "./Components/Search";

class App extends Component {
  state = {
    showSearch: false
  };

  handleSearchToggle = () => {
    let toggle = this.state.showSearch;

    this.setState({
      showSearch: !toggle
    });
  };
  render() {
    return (
      <div className="App">
        <TitleBar />
        <Sidebar showSearch={this.handleSearchToggle} />
        <Container />
        {this.state.showSearch ? <Search /> : null}
      </div>
    );
  }
}

export default App;
