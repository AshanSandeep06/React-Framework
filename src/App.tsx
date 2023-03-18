import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Counter from "./components/Counter";

export default class App extends Component {
  componentDidMount(): void {
    // alert("Hello React..!");
  }

  render(): React.ReactNode {
    return (
      <div className="border-l-pink-700 min-h-screen">
        {/* <Home />
        <About />
        <Contact /> */}
        <Counter/>
      </div>
    );
  }
}

// export default App;
