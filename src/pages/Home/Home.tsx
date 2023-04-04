import React, { Component } from "react";
import Post from "../../components/Post";
import "./home.css";
import { PostDetails } from "../../types/PostDetails";

type HomeProps = {};

type HomeState = {
  postList: PostDetails[];
};

//React.Component (Version 16 ekata kalin use krnne mehema)
export default class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    this.state = {
      postList: [
        {
          id: "1",
          title: "Lecture Day-01",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugaadipisci quam, doloribus atque alias pariatur sunt ad perspiciatis explicabo, natus molestiae nam dignissimos excepturi, animisapiente! Voluptates deserunt expedita animi.",
          hoursCount: 8,
          tags: ["Intro", "TypeScript"],
        },

        {
          id: "2",
          title: "Lecture Day-02",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugaadipisci quam, doloribus atque alias pariatur sunt ad perspiciatisexplicabo, natus molestiae nam dignissimos excepturi, animisapiente! Voluptates deserunt expedita animi.",
          hoursCount: 8,
          tags: ["React", "Routing"],
        },
      ],
    };
  }

  render() {
    return (
      // <>
      //   <Post
      //     title="Lecture Day-01"
      //     description="Learning Type-Script"
      //     tags={["frontend", "backend", "full-stack"]}
      //   />

      //   <Post
      //     title="Lecture Day-02"
      //     description="Learning React"
      //     tags={["frontend", "backend", "full-stack"]}
      //   />
      // </>

      <div className="p-6">
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
    );
  }
}
