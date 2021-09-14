import React, { useState } from "react";
import "./Navbar.css";

import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import SocialDropDown from "../SocialShare/SocialIconDropDown";

function Navbar(props) {
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isNavOpen, setisNavOpen] = useState(false);
  function toggleSocial(e) {
    setisNavOpen(false);
    setIsSocialOpen(!isSocialOpen);
  }

  const toggleNav = (e) => {
    setIsSocialOpen(false);
    setisNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/">
          <i className="im im-home"></i>
        </Link>
      </div>
      <div className="nav-container launch-point">
        <button className="launch-btn" onClick={toggleNav}>
          <img
            className="logo"
            src="/assets/images/arconBlog.svg"
            alt="site logo"
          ></img>
        </button>
        <NavMenu modalStatus={isNavOpen} close={toggleNav}></NavMenu>
      </div>
      {/* <NavLauncher closeSocial={closeSocial}></NavLauncher> */}
      <div className="nav-container">
        <i class="im im-share" onClick={toggleSocial}></i>
        <SocialDropDown isOpen={isSocialOpen} closeDropdown={toggleSocial} />
      </div>
    </nav>
  );
}

export default Navbar;
