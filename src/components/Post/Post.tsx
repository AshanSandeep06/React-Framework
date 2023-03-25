import React, { Component } from "react";
import Tag from "../Tag";

type PostProps = {
  title: string;
  description: string;
  tags: string[];
};

export default class Post extends Component<PostProps> {
  render() {
    return (
      <div className="p-6 border border-slate-400 w-full rounded mt-3">
        <h3 className="text-center">{this.props.title}</h3>
        <p>{this.props.description}</p>

        <span className="w-full mt-3 flex space-x-3">
          <Tag tag={this.props.tags[0]} />
          <Tag tag={this.props.tags[1]} />
          <Tag tag={this.props.tags[2]} />
        </span>
      </div>
    );
  }
}
