import React, { Component } from "react";
import Post from "../../components/Post/Post";
import { PostDetails } from "../../types/PostDetails";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Divider, TextField } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

type profileProps = {};

type profileState = {
  // State Variables / State Properties
  // Can change or modify these state variables when changing a state.
  title: string;
  description: string;
  hoursCount: number;
  lecturerName: string;
  tags: string;
  postList: PostDetails[];
  isClickedCreateNewPost: Boolean;
};

export default class Profile extends Component<profileProps, profileState> {
  constructor(props: profileProps) {
    super(props);

    this.state = {
      title: "",
      description: "",
      hoursCount: 0,
      lecturerName: "",
      tags: "",
      isClickedCreateNewPost: false,
      postList: [
        {
          id: "1",
          title: "Lecture Day-01",
          description:
            "Lecture D01 - Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin",
          hoursCount: 3,
          lecturerName: "Sanu",
          tags: ["Intro", "Type-Script"],
        },

        {
          id: "2",
          title: "Lecture Day-02",
          description:
            "Lecture D02 - Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin",
          hoursCount: 6,
          lecturerName: "Sanu",
          tags: ["React", "React-Routing"],
        },

        {
          id: "3",
          title: "Lecture Day-03",
          description:
            "Lecture D03 - Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin  Lorem ipsum dolor sit amet consectetur, adipisicin",
          hoursCount: 3,
          lecturerName: "Chanu",
          tags: ["React-DOM", "Components"],
        },
      ],
    };
  }

  handleClickCreateNewPost = () => {
    this.setState((previousState) => ({
      ...previousState,
      isClickedCreateNewPost: !previousState.isClickedCreateNewPost,
    }));
  };

  render() {
    return (
      <section id="profile">
        {this.state.isClickedCreateNewPost ? (
          <div className="pt-5 px-28">
            <div
              className="bg-blue-800 text-white 
        flex justify-between items-center 
        cursor-pointer p-4 w-full rounded mb-1"
              onClick={this.handleClickCreateNewPost}
            >
              <h4>Discard Post</h4>
              <RemoveCircleIcon />
            </div>

            <div className="border border-slate-400 rounded text-slate-400 cursor-pointer w-full">
              <form className="flex flex-col gap-[12px] p-8">
                <TextField
                  required
                  id="txtPostTitle"
                  label="Post Title"
                  variant="outlined"
                  placeholder="Enter Post Title"
                  type="text"
                  fullWidth={true}
                  value={this.state.title}
                />

                <TextField
                  required
                  id="txtPostDescription"
                  label="Post Description"
                  variant="outlined"
                  placeholder="Enter Post Description"
                  type="text"
                  fullWidth={true}
                  multiline
                  minRows={5}
                  maxRows={10} //Infinity
                  value={this.state.description}
                />

                <TextField
                  required
                  id="txtHoursCount"
                  label="Hours Count"
                  variant="outlined"
                  type="number"
                  fullWidth={true}
                  value={this.state.hoursCount}
                />

                <TextField
                  id="txtLecturerName"
                  label="Lecturer Name"
                  variant="outlined"
                  type="text"
                  fullWidth={true}
                  placeholder="Lecturer Name"
                  value={this.state.lecturerName}
                />

                <TextField
                  className="!mb-2"
                  required
                  id="txtTags"
                  label="Tags (Comma seperated tags)"
                  variant="outlined"
                  type="text"
                  fullWidth={true}
                  placeholder="Enter comma seperated tags"
                  value={this.state.tags}
                />

                <button className="font-poppins font-semibold py-2 bg-blue-800 text-white rounded">
                  <h6>Publish Post</h6>
                </button>
              </form>
            </div>

            <Divider className="!my-5" />
          </div>
        ) : (
          <div className="pt-5 px-28">
            <div
              className="bg-blue-800 text-white 
          flex justify-between items-center 
          cursor-pointer p-4 w-full rounded mb-1"
              onClick={this.handleClickCreateNewPost}
            >
              <h4>Create New Post</h4>
              <AddCircleIcon />
            </div>

            <div
              className="border border-slate-400
          rounded text-slate-400 flex justify-center items-center 
          cursor-pointer p-8 w-full gap-[9px]"
              onClick={this.handleClickCreateNewPost}
            >
              <PostAddIcon />
              <h6>Your New Post</h6>
            </div>

            <Divider className="!my-5" />
          </div>
        )}

        {/* Create New Post */}

        {/* Discard Post */}

        <div className="pb-6 px-24">
          {this.state.postList.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              description={post.description}
              hoursCount={post.hoursCount}
              lecturerName={post.lecturerName}
              tags={post.tags}
            />
          ))}
        </div>
      </section>
    );
  }
}
