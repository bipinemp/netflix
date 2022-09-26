import { async } from "@firebase/util";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { useUserAuth } from "./context/UserAuthContext";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logOut } = useUserAuth();
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll == null;
  };
  const [menu, setMenu] = useState(true);
  const [menuBorder, setMenuBorder] = useState(true);
  const handlemenu = () => {
    setMenu(!menu);
    setMenuBorder(!menuBorder);
  };

  return (
    <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <AiOutlineSearch className="icon" />
          <span>KID</span>

          <BsBell className="icon" />
          <img src="https://rb.gy/g1pwyx" alt="profile" />
          <div className="profile">
            <IoMdArrowDropdown
              className={menuBorder ? "icon" : "icon iconborder"}
              onClick={handlemenu}
            />
            <div
              className={
                menu ? "options dropdownmenu" : "dropdownmenu  optionsshow"
              }
            >
              <span className="menudown">Settings</span>
              <span onClick={handleLogOut} className="menudown">
                Logout
              </span>
              <span>{user && user.email}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
