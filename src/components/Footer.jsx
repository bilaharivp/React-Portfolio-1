import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Bilahari Portfolio. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#" aria-label="GitHub">GitHub</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Email">Mail</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;