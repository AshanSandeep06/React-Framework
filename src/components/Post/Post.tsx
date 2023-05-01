import React, { Component } from "react";
import Tag from "../Tag";
import DeleteIcon from "@mui/icons-material/Delete";

type PostProps = {
  _id: string;
  title: string;
  description: string;
  hoursCount?: number;
  lecturerName?: string;
  tags: string[];
};

export default class Post extends Component<PostProps> {
  deletePost = (postID: string) => {

  };

  render() {
    return (
      <div className="p-6 border border-slate-400 w-full rounded mt-3">
        <h3 className="text-center">{this.props.title}</h3>
        <p>{this.props.description}</p>

        <span className="w-full mt-3 flex justify-between">
          <span className="flex space-x-5">
            {this.props.tags.map((text, index) => (
              <Tag key={this.props._id} tag={text} />
            ))}
          </span>

          <button onClick={() => this.deletePost(this.props._id)}>
            <DeleteIcon />
          </button>
        </span>
      </div>
    );
  }
}
