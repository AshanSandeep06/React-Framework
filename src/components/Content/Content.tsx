import React, { Component } from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";

export default class Content extends Component {
  render() {
    return (
      <div className="mt-20 px-4 pt-3">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    );
  }
}
