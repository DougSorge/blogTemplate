import React from "react";
import "./Sidebar.css";
// import RelatedPosts from "./RelatedPosts";
import Advertisements from "./Advertisements";

function Sidebar() {
  return (
    <div className="side-bar-container">
      <Advertisements></Advertisements>
      {/* <RelatedPosts></RelatedPosts> */}
    </div>
  );
}

export default Sidebar;
