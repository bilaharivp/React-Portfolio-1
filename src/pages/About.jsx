import React from "react";
import "../Pages.css";
import profileImage from "../assets/images/profile.jpg"; // Put your image here

function About() {
  return (
    <div className="page-container">
      <div className="page-content">
        <img src={profileImage} alt="Krishnendhu" className="profile-pic" />
        <h1>About Me</h1>
        <p>
          Hi! I'm Bilahari, a frontend developer who loves creating 
          beautiful and functional websites. I enjoy learning new technologies 
          and turning ideas into reality through code.
        </p>
        <div className="skills">
          <div className="skill">
            <h3>Frontend Development</h3>
            <p>React, JavaScript, HTML, CSS</p>
          </div>
          <div className="skill">
            <h3>Responsive Design</h3>
            <p>Mobile-friendly websites</p>
          </div>
          <div className="skill">
            <h3>Clean Code</h3>
            <p>Easy to read and maintain</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;