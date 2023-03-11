import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  componentDidMount(): void {
    // alert("Hello React..!");
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>Hello React</h1>
      </div>
    );
  }
}

// export default App;
