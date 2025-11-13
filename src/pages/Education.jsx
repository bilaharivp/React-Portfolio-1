import React from "react";
import "../Pages.css";

function Education() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Education</h1>
        
        <div className="education-item">
          <h3>Cloud Application Development</h3>
          <p className="institute">Don Bosco Tech<br></br>Kollam</p>
          <p className="year">2024</p>
        </div>

        <div className="education-item">
          <h3>Bachelor of Computer Science</h3>
          <p className="institute">Collage Of Applied Science<br></br>Kundara</p>
          <p className="year">2021-2024</p>
        </div>
      </div>
    </div>
  );
}

export default Education;