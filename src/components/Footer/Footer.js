import React from "react";
import FooterNav from "./FooterNav";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link to={"/"}>
          <p>ARCON'S ULTIMATE BLOG WORLD &copy; est. 2021</p>
        </Link>
        <FooterNav />
        <p>All Rights Reserved </p>
      </div>
    </footer>
  );
}

export default Footer;
