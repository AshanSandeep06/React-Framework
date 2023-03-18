import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";

export default class App extends Component {
  componentDidMount(): void {
    // alert("Hello React..!");
  }

  render(): React.ReactNode {
    return (
      <div className="bg-green-500 border-l-pink-700 min-h-screen">
        <Home />
      </div>
    );
  }
}

// export default App;
