import { NavLink } from "react-router-dom";
import UserImage from "../../assets/UserImage.png";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header() {
  const activeLink = "border-b-2";
  const normalLink = "";

  return (
    <section
      id="header"
      className="z-10 flex w-full h-20 bg-blue-800 shadow-lg shadow-black/20 text-white fixed top-0"
    >
      <div className="w-1/2 h-full flex items-center gap-2.5 pl-2">
        <img src={UserImage} alt="UserImage" className="w-10 h-10" />
        <h1 className="h-max mb-[3px]">My Profile</h1>
      </div>

      <div className="w-1/2 h-full pr-5">
        <ul className="h-full flex items-center justify-end gap-[60px]">
          <NavLink
            to={"/Home"}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Home
          </NavLink>

          <NavLink
            to={"/About"}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            About
          </NavLink>

          <NavLink
            to={"/Contact"}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Contact
          </NavLink>

          <NavLink
            to={"/Profile"}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Profile
          </NavLink>

          <NavLink to={"/"}>
            <LogoutIcon />
          </NavLink>
        </ul>
      </div>
    </section>
  );
}
