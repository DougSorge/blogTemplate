import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";

function NavItem(props) {
  let NavItemClasses = classNames({
    "nav-item": true,
    "nav-item-hidden": props.show === false,
  });

  return (
    <span className={NavItemClasses}>
      <Link to={props.url} className="icon-box" onClick={props.close}>
        <i className={props.class}></i>
        <span className="menu-option-description">{props.description}</span>
      </Link>
    </span>
  );
}

export default NavItem;
