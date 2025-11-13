import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span>Krishnendhu 👋</span></h1>
        <h2>Frontend Developer</h2>
        <p>
          I love creating clean, user-friendly, and responsive websites using React.
        </p>
        <button>View My Work</button>
      </div>
    </section>
  );
}

export default Hero;
