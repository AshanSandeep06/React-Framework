import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

export default class App extends Component {
  componentDidMount(): void {
    // alert("Hello React..!");
  }

  render(): React.ReactNode {
    return (
      <div className="border-l-pink-700 min-h-screen">
        {/* <Home />
        <About />
        <Contact />
        <Counter/> */}
        <Header />
        <Content />
      </div>
    );
  }
}

// export default App;
