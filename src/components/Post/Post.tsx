import React, { Component } from "react";
import Tag from "../Tag";

type PostProps = {
  title: string;
  description: React.ReactNode;
  hoursCount?: number;
  lecturerName?: string;
  tags: string[];
};

export default class Post extends Component<PostProps> {
  render() {
    return (
      <div className="p-6 border border-slate-400 w-full rounded mt-3">
        <h3 className="text-center">{this.props.title}</h3>
        <p>{this.props.description}</p>

        <span className="w-full mt-3 flex space-x-3">
          {this.props.tags.map((text, index) => (
            <Tag key={index} tag={text} />
          ))}
        </span>
      </div>
    );
  }
}
