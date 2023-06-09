import React, { Component } from "react";

type CounterProps = {};

type CounterState = {
  count: number;
};

export default class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    console.log("Constructor Called..!");
    super(props);

    this.state = {
      count: 0,
    };

    // Binding Normal Functions into class based Components
    this.increaseCount = this.increaseCount.bind(this);
  }

  componentDidMount(): void {
    console.log("Component Mounted..!");
  }

  componentDidUpdate(): void {
    console.log("Component Updated..!");
  }

  componentWillUnmount(): void {
    console.log("Component Unmounted..!");
  }

  //   increaseCount = () => {
  //     this.setState({ count: this.state.count + 1 });
  //   };

  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }

  // Arrow Function
  decreaseount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="pl-5 pt-5">
        <h1>Counter : {this.state.count}</h1>

        <div className="flex space-x-5 mt-5">
          {/* disabled={true} */}
          <button
            id="btnIncrease"
            // disabled={this.state.count == 10}
            disabled={this.state.count == 10 ? true : false}
            className="border drop-shadow-lg border-green-800 px-4 py-2 text-green-800 rounded-xl hover:bg-green-700 hover:text-white"
            onClick={this.increaseCount}
          >
            Increase
          </button>
          <button
            id="btnDecrease"
            disabled={this.state.count == 0 ? true : false}
            className="border drop-shadow-lg border-red-700 px-4 py-2 text-red-700 rounded-xl hover:bg-red-700 hover:text-white"
            onClick={this.decreaseount}
          >
            Decrease
          </button>
        </div>
      </div>
    );
  }
}
