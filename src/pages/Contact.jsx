import React from "react";
import "../Pages.css";

function Contact() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Contact Me</h1>
        <div className="contact-info">
          <p>
            Email: <strong>bilaharivp@gmail.com</strong>
          </p>
          <p>
            Phone: <strong>+91 7907452589</strong>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="#" target="_blank">
              linkedin.com/in/bilaharivp
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href="#" target="_blank">
              github.com/bilaharivp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
