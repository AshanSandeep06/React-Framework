import { Button, TextField } from "@mui/material";
import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="p-6">
        <span className="flex flex-col space-y-3 text-center">
          <h1>Contact Us</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            tenetur, quas eaque animi rerum quaerat cumque est mollitia veniam
            blanditiis facere esse nisi quisquam at reprehenderit enim,
            doloribus repudiandae? Doloribus? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Inventore tenetur, quas eaque animi
            rerum quaerat cumque est mollitia veniam blanditiis facere esse nisi
            quisquam at reprehenderit enim, doloribus repudiandae? Doloribus?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            tenetur, quas eaque animi rerum quaerat cumque est mollitia veniam
            blanditiis facere esse nisi quisquam at reprehenderit enim,
            doloribus repudiandae? Doloribus? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Inventore tenetur, quas eaque animi
            rerum quaerat cumque est mollitia veniam blanditiis facere esse nisi
            quisquam at reprehenderit enim, doloribus repudiandae? Doloribus?
          </p>
        </span>

        <div>
          <form className="mt-3 w-full py-8 px-32 flex flex-col space-y-3">
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              placeholder="Enter Your Email Here"
              fullWidth={true}
              required
            />

            <TextField
              label="Message"
              type="text"
              variant="outlined"
              placeholder="Enter Your Message Here"
              fullWidth={true}
              required
              multiline
              minRows={10}
              maxRows={Infinity}
            />

            <Button variant="contained">Submit</Button>
          </form>
        </div>
      </div>
    );
  }
}
