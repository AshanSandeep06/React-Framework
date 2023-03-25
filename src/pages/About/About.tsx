import React, { Component } from "react";
import Card from "../../components/Card";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center mb-8 mt-2">About Us</h1>

        <div className="flex justify-center mb-10">
          <p className="w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse
            iure, nulla mollitia, quisquam dolor itaque a sapiente asperiores
            nemo, deleniti dolore! Explicabo dolorem asperiores saepe, tempore
            debitis corporis perferendis.
          </p>
        </div>

        <div className="flex">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    );
  }
}
