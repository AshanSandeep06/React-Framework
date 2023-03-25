import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import UserImage from "../../assets/User.png";

export default class Header extends Component {
  render() {
    const activeLink = "border-b-2 cursor-pointer";
    const normalLink = "cursor-pointer";

    return (
      <div className="bg-blue-900 text-white fixed h-20 w-full top-0 p-4">
        <div className="w-full h-full">
          <div className="flex w-full h-full items-center">
            <div className="w-1/2">
              <h1>Ashan Sandeep</h1>
            </div>

            <div className="w-1/2">
              <div className="flex w-full justify-between font-poppins items-center">
                <NavLink
                  to={"/home"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Contact
                </NavLink>
                <img
                  src={UserImage}
                  alt="UserImage"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
