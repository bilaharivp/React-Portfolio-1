import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // small css for spacing if you want; but App.css already styles .navbar

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="logo">Bilahari Portfolio</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
