import React, { Component } from "react";

type TagProps = {
  tag: string;
};

export default class Tag extends Component<TagProps> {
  render() {
    return (
      <span className="px-6 py-2 border border-slate-400 rounded">
        <h6>{this.props.tag}</h6>
      </span>
    );
  }
}
