import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div className="pl-5 pt-5">
        <h1>Counter</h1>

        <div className="flex space-x-5 mt-5">
          <button className="border border-green-800 px-4 py-2 text-green-800 rounded-xl hover:bg-green-700 hover:text-white">
            Increase
          </button>
          <button className="border border-red-700 px-4 py-2 text-red-700 rounded-xl hover:bg-red-700 hover:text-white">Decrease</button>
        </div>
      </div>
    );
  }
}
