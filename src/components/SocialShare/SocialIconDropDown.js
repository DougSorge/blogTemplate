import React from "react";
import classNames from "classnames";

import "./SocialIconDropdown.css";

function SocialDropDown(props) {
  let socialClasses = classNames({
    "social-dropdown-box": true,
    "social-hidden": props.isOpen === false,
    "social-visible": props.isOpen === true,
  });

  return (
    <div className={socialClasses}>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        onClick={props.closeDropdown}
      >
        <i class="im im-twitter"></i>
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noreferrer"
        onClick={props.closeDropdown}
      >
        <i class="im im-youtube"></i>
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
        onClick={props.closeDropdown}
      >
        <i class="im im-instagram"></i>
      </a>
    </div>
  );
}

export default SocialDropDown;
