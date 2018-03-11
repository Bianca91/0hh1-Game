import React, { Component } from "react";
import "./App.css";
import Board from "./containers/Board";
import CreateGameButton from "./components/CreateGameButton";
import Progress from "./components/Progress";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">0hh1</h1>
        <div className="actioins">
          <CreateGameButton />
        </div>

        <Progress />

        <Board />
      </div>
    );
  }
}

export default App;
