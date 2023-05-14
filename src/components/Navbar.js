import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div class="header">
      <li>
        <Link to="/">roni wu</Link>
      </li>
      <div class="navlinks">
        <li>
          <Link to="/experience">experience</Link>
        </li>
        <li>
          <Link to="/design">design</Link>
        </li>
        <li>
          <Link to="/art">art</Link>
        </li>
        <li>
          <Link to="/about">about me</Link>
        </li>
      </div>
    </div>
  );
};
export default Navbar;
