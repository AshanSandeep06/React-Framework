import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  componentDidMount(): void {
    // alert("Hello React..!");
  }

  render(): React.ReactNode {
    return (
      <div className="bg-green-500 border-l-pink-700 min-h-screen">
        <h1>Hello World</h1>
        <h1 className="text-red-700">Hello World</h1>
        <h2>Hello World</h2>
        <h3>Hello World</h3>
        <h4>Hello World</h4>
      </div>
    );
  }
}

// export default App;
