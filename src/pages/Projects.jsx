import React from "react";
import "../Pages.css";

function Projects() {
  const projectList = [
    { title: "Chat Monitoring", desc: "A Python Django project implements ML for to flag offensive or unsafe content." },
    { title: "Number plate detection", desc: "A Django app identifies vehicle number plate using ML." },
    { title: "Eazypass", desc: "Developed a web-based bus pass management system to automate student registration and pass generation." },
  ];

  return (
    <div className="page-container">
      <div className="page-content">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projectList.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Projects;
