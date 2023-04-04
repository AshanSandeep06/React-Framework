import React, { Component } from "react";
import Post from "../../components/Post/Post";

export default class Profile extends Component {
  render() {
    return (
      <section id="profile">
        <div className="p-6">
          <Post
            key={"1"}
            title="Lecture Day 01"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci quam, doloribus atque alias pariatur sunt ad perspiciatis explicabo, natus molestiae nam dignissimos excepturi, animi sapiente! Voluptates deserunt expedita animi."
            hoursCount={3}
            lecturerName="Sanu"
            tags={["Intro", "React"]}
          />
        </div>
      </section>
    );
  }
}
