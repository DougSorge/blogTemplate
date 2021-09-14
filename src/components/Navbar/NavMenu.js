import React from "react";
import "./NavMenu.css";
import NavItem from "./NavItem";
import classNames from "classnames";

function NavMenu(props) {
  let Navclasses = classNames({
    "nav-menu": true,
    "nav-menu-open": props.modalStatus === true,
    "nav-menu-closed": props.modalStatus === false,
  });

  return (
    <div className={Navclasses}>
      <NavItem
        url={"/all-posts"}
        class={"im im-note-o"}
        description={"Articles"}
        close={props.close}
      />
      <NavItem
        url={"/authors"}
        class={"im im-users"}
        description={"Team"}
        close={props.close}
      ></NavItem>
      <NavItem
        url={"/about"}
        class={"im im-id-card"}
        description={"About"}
        close={props.close}
      ></NavItem>
      <NavItem
        url={"/contact"}
        class={"im im-mail"}
        description={"Contact"}
        close={props.close}
      ></NavItem>
      <NavItem
        url={"/fund-us"}
        class={"im im-coin"}
        description={"Fund Us"}
        close={props.close}
      ></NavItem>
    </div>
  );
}

export default NavMenu;
