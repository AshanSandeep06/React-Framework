import React, { Component } from "react";
import Post from "../../components/Post";
import "./home.css";

//React.Component (Version 16 ekata kalin use krnne mehema)
export default class Home extends Component {
  render() {
    return (
      <>
        <Post
          title="Lecture Day-01"
          description="Learning Type-Script"
          tags={["frontend", "backend", "full-stack"]}
        />

        <Post
          title="Lecture Day-02"
          description="Learning React"
          tags={["frontend", "backend", "full-stack"]}
        />
      </>
    );
  }
}
