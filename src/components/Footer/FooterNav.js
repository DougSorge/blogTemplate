import React from "react";
import NavItem from "../Navbar/NavItem";

import "./FooterNav.css";

function FooterNav() {
  return (
    <nav className="footerNav">
      <ul className="footerNavList">
        <NavItem url={"/"} class={"im im-home"} description={"Home"}></NavItem>
        <NavItem
          url={"/all-posts"}
          class={"im im-note-o"}
          description={"Articles"}
        />
        <NavItem
          url={"/authors"}
          class={"im im-users"}
          description={"Team"}
        ></NavItem>
        <NavItem
          url={"/about"}
          class={"im im-id-card"}
          description={"About"}
        ></NavItem>
        <NavItem
          url={"/contact"}
          class={"im im-mail"}
          description={"Contact"}
        ></NavItem>
      </ul>
    </nav>
  );
}

export default FooterNav;
