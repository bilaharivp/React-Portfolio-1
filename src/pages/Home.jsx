import React from "react";
import "../Pages.css";

function Home() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Hello, I'm Bilahari</h1>
        <p className="subtitle">Frontend Developer</p>
        <p>
          I build beautiful and responsive websites using React and modern web tools. 
          I love creating user-friendly experiences with clean code.
        </p>
        <div className="button-group">
          <button onClick={() => window.location.href = '/projects'}>
            View Projects
          </button>
          <button className="secondary" onClick={() => window.location.href = '/contact'}>
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;